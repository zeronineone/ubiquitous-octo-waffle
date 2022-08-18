import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../domains/config-objects';
import * as moment from "moment";
import { LocalStorageService } from './local-storage.service';
import { ApiConfigs } from '../znoconstants/znoc';
import { ApiService } from './api.service';
import { OtpResponse, TokenResponse } from '../domains/response-opjects';
import { Router } from '@angular/router';
import { RoutingService } from './routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, 
    private localStorageService: LocalStorageService,
    private apiServiceOtp : ApiService<OtpResponse>,
    private apiServiceToken : ApiService<TokenResponse>,
    private routingService : RoutingService) { }

 
  /*
  application-id
  application-secret
  {
 "emailId":"shub.singh007@gmail.com",
 "userType":"MERCHANT",
 "countryCode":"IN"
}
{
    "emailId":"shub.singh007@gmail.com",
 "userType":"MERCHANT",
 "countryCode":"IN",
 "otp":"240137"
}
{
    "statusResponse": {
        "statusCode": 1001,
        "statusMessage": "Successfully sent otp",
        "statusType": "SUCCESS",
        "errors": null
    },
    "noOfDigits": 6,
    "retryRemaining": 3,
    "coolDownTimeInSec": 0,
    "newUser": false
}

{
    "statusResponse": {
        "statusCode": 1002,
        "statusMessage": "Successfully generated token",
        "statusType": "SUCCESS",
        "errors": null
    },
    "userId": "usrmer4aef5c9016754c77ac03fd437995e7d5",
    "token": "1660513759016-x1SnXFXKNbb37dVWkJDh68UedOnEApMTk7BNpwbTx9bNohhPOrwy1kf5zsHWChq7VdAhVNYhMNSus3610mGkag==",
    "userType": "MERCHANT",
    "expiresAt": 1663105759019
}
  */
  optResponse : OtpResponse | undefined;
  getOtp(email:string,router : Router){

    const requestBody = {
      emailId: email,
      userType:"MERCHANT",
      countryCode:"IN"
     }

   /*  return this.apiServiceOtp.doHttpPost(ApiConfigs.otpUrl,requestBody)
     .subscribe(
      (response) =>  {
        if(response.statusResponse != undefined && response.statusResponse != null && response.statusResponse.statusType == 'SUCCESS'){
        this.routingService.routeToVerifyPage({ 
        userEmail: email,
        nextUrl: "verifyOtpAndGetToken",
        noOfDigits: response.noOfDigits
      },router)
    }else{
      this.routingService.routeToLoginPage({},router) 
    }
    },
    (error) => {
      this.routingService.routeToLoginPage({},router) 
    }); */

    return this.apiServiceOtp.doHttpPost(ApiConfigs.otpUrl,requestBody).subscribe({
      next: (response) => {
        if(response.statusResponse != undefined && response.statusResponse != null && response.statusResponse.statusType == 'SUCCESS'){
            this.routingService.routeToVerifyPage({ 
            userEmail: email,
            nextUrl: "verifyOtpAndGetToken",
            noOfDigits: response.noOfDigits
          },router)
        }else{
          this.routingService.routeToLoginPage({},router) 
        }
      },
      error: (e) => {
        console.log(e);
        this.routingService.routeToLoginPage({},router) 
      },
      complete: () => console.info('complete') 
    })
  }

  verifyOtpAndGetToken(otp:string,email:string,router : Router) {
const requestBody = {
  emailId: email,
  userType:"MERCHANT",
  countryCode:"IN",
  otp:otp
 }

 return this.apiServiceToken.doHttpPost(ApiConfigs.otpVerifyUrl,requestBody)
 .subscribe({
  next: (response) => {
    if(response.statusResponse != undefined && response.statusResponse != null && response.statusResponse.statusType == 'SUCCESS'){
      this.setSession(response);
      console.log(this.getSession())
      this.routingService.routeToSpacePage({},router) 
    }else{
      this.routingService.routeToLoginPage({},router) 
    }
  },
  error: (e) => {
    console.log(e);
    this.routingService.routeToLoginPage({},router) 
  },
  complete: () => console.info('complete') 

 }); 
}
      
 setSession(tokenResponse : TokenResponse) {
    localStorage.setItem('user_id', tokenResponse.userId);
    localStorage.setItem("token", tokenResponse.token);
    localStorage.setItem("user_type",tokenResponse.userType);
    localStorage.setItem("expires_at", JSON.stringify(tokenResponse.expiresAt.valueOf()) );
}  

      
getSession() :any {
    return { 
    userId : localStorage.getItem('user_id'),
    token : localStorage.getItem("token"),
    userType : localStorage.getItem("user_type"),
    expiresAt : localStorage.getItem("expires_at")}
}  

logout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("expires_at");
}

public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
    return !this.isLoggedIn();
}

getExpiration() {
  let expiration = localStorage.getItem("expires_at");
    if(expiration != null){
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    return moment(1000000000000);
}    
}
