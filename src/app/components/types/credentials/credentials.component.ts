import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusType, UserType } from 'src/app/domains/config-objects';
import { CreateCredentialsRequest } from 'src/app/domains/request-opjects';
import { BlackHole, CredentialsResponse } from 'src/app/domains/response-opjects';
import { InputServiceService } from 'src/app/services/input-service.service';
import { SaveitService } from 'src/app/services/saveit.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  constructor(private inputServiceService : InputServiceService,private saveitService : SaveitService,private router: Router) { }
  credConfig = {
    isdisplay : true,
    isinput : false
  }
  ngOnInit(): void {
    this.credConfig = {
      isdisplay : true,
      isinput : false
    }
    this.inputServiceService.getCapturedData().subscribe((value)=>{
      console.log(value)
      this.captureDataFromInputCompotent(value);
       })
       this.getCredentials();  
  }
  createCredentialsRequest : CreateCredentialsRequest | undefined
  captureDataFromInputCompotent(eventData : any){
    //eventData : any
    console.log("Event reached") ;
    console.log(eventData) ;
    this.credConfig = {
      isdisplay : true,
      isinput : false
    }
  //  this.createUserRequest.useremail = eventData["useremail"]
 
  //  this.userDetailsService.createUser(this.createUserRequest)
  
  //  this.isCaptureEvent = !this.isCaptureEvent;
//    this.isVerifyEvent = !this.isVerifyEvent;

      this.createCredentialsRequest = {
        name : eventData["title"],
        userName : eventData["username"],
        password : eventData["password"],
        url : eventData["url"],
        description : eventData["description"],
        hint : eventData["hint"]
      }
      this.createCredentials(this.createCredentialsRequest);
    
    console.log("This is parent");
  }
  createCredentials(createCredentialsRequest : CreateCredentialsRequest){
    this.saveitService.createCredentials(createCredentialsRequest).subscribe({
      next: (response) => {
        if(response != undefined && response != null && response.statusResponse != undefined && response.statusResponse != null && response.statusResponse.statusType == StatusType.SUCCESS){
          this.credentialsSavedSucessCallBack(response);
        }else{
          this.credentialsSavedFailuerCallBack();
        }
      },
      error: (e) => {
        console.log(e);
        this.credentialsSavedFailuerCallBack();
      },
      complete: () => console.info('complete') 
    });
  }
  getCredentials(){
    this.saveitService.getCredentials([]).subscribe({
      next: (response) => {
        if(response != undefined && response != null && response.statusResponse != undefined && response.statusResponse != null && response.statusResponse.statusType == StatusType.SUCCESS){
          this.credentialsFetchSucessCallBack(response);
        }else{
          this.credentialsFetchFailuerCallBack();
        }
      },
      error: (e) => {
        console.log(e);
        this.credentialsFetchFailuerCallBack();
      },
      complete: () => console.info('complete') 
    })
  }
  gotoSavveNewCredentials(){
    this.credConfig = {
      isdisplay : false,
      isinput : true
    }
  }
  listOfCreds : BlackHole[] | undefined
  credentialsSavedSucessCallBack(credentialsResponse : CredentialsResponse){
    this.credConfig = {
      isdisplay : true,
      isinput : false
    }
    this.getCredentials();  
  }
  credentialsSavedFailuerCallBack(){
    this.credConfig = {
      isdisplay : false,
      isinput : true
    }
  }
  credentialsFetchSucessCallBack(credentialsResponse : CredentialsResponse){
    this.listOfCreds = credentialsResponse.credentials;
  }
  credentialsFetchFailuerCallBack(){
    this.listOfCreds = [] 
  }
  credentialsData = {}
  inputComponentData  = {
    titleText: 'Welcome to local host',
    subText: 'Save you credentials',
    createAccountLabel: "Let's go!!",
    nextUrl:"verifyOtpAndGetToken",
    inputBlockConfigs: [
      {
        name: "title",
        label: "Tile",
        type: "text",
        isVisible : true,
        isContinueVisible: true,
        inputStatus : [true,false,false]
      },
      {
        name: "url",
        label: "Url",
        type: "text",
        isVisible : true,
        isContinueVisible: true,
        inputStatus : [true,false,false]
      },
      {
        name: "username",
        label: "User Name",
        type: "text",
        isVisible : true,
        isContinueVisible: true,
        inputStatus : [true,false,false]
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        isVisible : true,
        isContinueVisible: true,
        inputStatus : [true,false,false]
      },
      {
        name: "description",
        label: "Description",
        type: "text",
        isVisible : true,
        isContinueVisible: true,
        inputStatus : [true,false,false]
      },
      {
        name: "hint",
        label: "Hint",
        type: "text",
        isVisible : true,
        isContinueVisible: true,
        inputStatus : [true,false,false]
      }
    ]
  }
}
