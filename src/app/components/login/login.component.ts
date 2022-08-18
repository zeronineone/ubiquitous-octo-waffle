import { Component, OnInit } from '@angular/core';
import { CreateUserRequest, InputBlockConfig } from 'src/app/domains/config-objects';
import { InputComponentData } from 'src/app/domains/input-component';
import { comapy_name } from 'src/app/app-constants';
import { UserService } from 'src/app/services/user-details.service';
import { NgForm } from '@angular/forms';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PInputComponent } from '../p-input/p-input.component';
import { InputServiceService } from 'src/app/services/input-service.service';
import { Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { OtpResponse, TokenResponse } from 'src/app/domains/response-opjects';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private inputServiceService: InputServiceService,private authServiceService: AuthServiceService,
    private userDetailsService: UserService,private route: ActivatedRoute,
    private router: Router,private routingService : RoutingService) {

     }


  inputComponentData : InputComponentData | undefined
  buttomnClickedSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.inputComponentData  = {
      titleText: 'Welcome to local host',
      subText: 'Enjoy your space',
      createAccountLabel: "Let's go!!",
      nextUrl:"getOtp",
      inputBlockConfigs: [
        {
          name: "userEmail",
          label: "Enter your email",
          type: "text",
          isVisible : true,
          isContinueVisible: true,
          inputStatus : [true,false,false]
        }
      ]
    }
 /*   this.router.navigate(['/login'], { state: { 
      frontEnd: JSON.stringify(this.inputComponentData),
      site: 'edupala.com',
    } });
*/
  //  this.router.navigateByUrl('/login', { state: this.inputComponentData });
 // this.router.navigateByUrl('/login', { state: { id:1 , name:'Angular' } });
   /* this.router.navigate(['/login'], {
      state: {
        frontEnd: JSON.stringify({ framwork: 'Angular', version: '14' }),
        site: 'edupala.com',
      },
 });*/
 this.buttomnClickedSubscription = this.inputServiceService.getCapturedData().subscribe((value)=>{
 console.log(value)
 this.captureDataFromInputCompotent(value);
  })

  
 this.router.navigateByUrl("/login/input", { state: this.inputComponentData });
  }

  
  isCaptureEvent  = true;
  isVerifyEvent = false;

  

  createUserRequest : CreateUserRequest = {
    useremail: "",
  };
  
  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl("/login", { state: this.inputComponentData });
  }
  passFuctionTochild(componentRef : any){
    if(!(componentRef instanceof PInputComponent)){
        return;
    }
    componentRef.parentFunction = this.captureDataFromInputCompotent;
  }
  captureDataFromInputCompotent(eventData : any){
    //eventData : any
    console.log("Event reached") ;
    console.log(eventData) ;
    
  //  this.createUserRequest.useremail = eventData["useremail"]
 
  //  this.userDetailsService.createUser(this.createUserRequest)
  if(eventData["nextUrl"] == "getOtp"){
      this.authServiceService.getOtp(eventData["userEmail"],this.router);
  }else if(eventData["nextUrl"] == "verifyOtpAndGetToken"){
      this.authServiceService.verifyOtpAndGetToken(eventData["userOtp"],eventData["userEmail"],this.router);
  }
  //  this.isCaptureEvent = !this.isCaptureEvent;
//    this.isVerifyEvent = !this.isVerifyEvent;

    
    console.log("This is parent");
  }

  processOptResponse(otpResponse : OtpResponse){
    console.log(otpResponse)
    if(otpResponse.statusResponse != undefined && otpResponse.statusResponse != null && otpResponse.statusResponse.statusType == 'SUCCESS'){

      this.router.navigateByUrl('/login/verify', { state : { 
        userEmail: this.createUserRequest.useremail,
        nextUrl: "verifyOtpAndGetToken",
        noOfDigits: otpResponse.noOfDigits
      } });

    /*  this.routingService.routeToVerifyPage({ 
        userEmail: this.createUserRequest.useremail,
        nextUrl: "verifyOtpAndGetToken",
        noOfDigits: otpResponse.noOfDigits
      },this.router);*/
    }else{
      this.routingService.routeToLoginPage({},this.router) 
    }
  }
  processverifyOtpAndGetTokenResponse(tokenResponse :TokenResponse){
    console.log(tokenResponse)
    if(tokenResponse.statusResponse != undefined && tokenResponse.statusResponse != null && tokenResponse.statusResponse.statusType == 'SUCCESS'){
      this.authServiceService.setSession(tokenResponse);
      this.routingService.routeToSpacePage({},this.router) 
    }else{
      this.routingService.routeToLoginPage({},this.router) 
    }
  }

}
