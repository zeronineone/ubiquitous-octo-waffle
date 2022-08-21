import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryCode, StatusType, UserAuth, UserType } from '../domains/config-objects';
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


  optResponse : OtpResponse | undefined;
  getOtp(email:string,router : Router){

    const requestBody = {
      emailId: email,
      userType:UserType.ZNO_USER,
      countryCode:CountryCode.IN
     }

    return this.apiServiceOtp.doHttpPost(ApiConfigs.otpUrl,requestBody).subscribe({
      next: (response) => {
        if(response != undefined && response != null && response.statusResponse != undefined && response.statusResponse != null && response.statusResponse.statusType == StatusType.SUCCESS){
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
  userType:UserType.ZNO_USER,
  countryCode:CountryCode.IN,
  otp:otp
 }

 return this.apiServiceToken.doHttpPost(ApiConfigs.otpVerifyUrl,requestBody)
 .subscribe({
  next: (response) => {
    if(response != undefined && response != null && response.statusResponse != undefined && response.statusResponse != null && response.statusResponse.statusType == StatusType.SUCCESS){
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

 userAuth = {} as UserAuth;
getSession() :UserAuth {

  let user_id = localStorage.getItem("user_id");
  if(user_id != null){
     this.userAuth.userId = user_id;
  }
  let token = localStorage.getItem("token");
  if(token != null){
     this.userAuth.token = token;
  }
  let user_type = localStorage.getItem("user_type");
  if(user_type != null){
     this.userAuth.userType = <UserType>user_type;
  }
  let expires_at = localStorage.getItem("expires_at");
  if(expires_at != null){
     this.userAuth.expiresAt = +expires_at;
  }
    return this.userAuth;
}  

logout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("expires_at");
}

public isLoggedIn() {
  //return true;
    return moment().isBefore(this.getExpiration());
}

isNonLoggedIn() {
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
