import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../domains/config-objects';
import * as moment from "moment";
import { LocalStorageService } from './local-storage.service';
import { ApiConfigs } from '../znoconstants/znoc';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService,private apiService : ApiService) { }

 
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

  getOtp(email:string, url:string){

    const requestBody = {
      emailId: email,
      userType:"MERCHANT",
      countryCode:"IN"
     }

     return this.apiService.doHttpPost(ApiConfigs.otpUrl,requestBody)
     .subscribe(
      res => console.log(res)
      ); 
  }

  verifyOtpAndGetToken(otp:string,email:string,url:string) {
const requestBody = {
  emailId: email,
  userType:"MERCHANT",
  countryCode:"IN",
  otp:otp
 }

 return this.apiService.doHttpPost(ApiConfigs.otpVerifyUrl,requestBody)
 .subscribe(
  res => console.log(res)
  ); 
}
      
private setSession(authResult: { expiresIn: any; idToken: string; }) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}          

logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
}

public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
    return !this.isLoggedIn();
}

getExpiration() {let expiration = localStorage.getItem("expires_at");
    if(expiration == null){
      expiration = "";
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
}    
}


