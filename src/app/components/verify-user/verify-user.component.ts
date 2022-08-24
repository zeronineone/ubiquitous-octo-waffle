import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { InputServiceService } from 'src/app/services/input-service.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  constructor(private inputServiceService:InputServiceService) { }
 // @Input()
  userEmail : string | undefined 
  nextUrl : string | undefined 
  
  titleText : string = "You're almost done!"
  subText : string = "We sent a launch code to "
 
  @Output() publishCapturedVerification: EventEmitter<any> = new EventEmitter<any>();

  faArrowRight = faArrowRight;
  noOfotpDigits = 6;
  otpDigits = [
    {"value":""}
  ];
  ngOnInit(): void {
    this.userEmail = history.state['userEmail'];
    this.nextUrl = history.state['nextUrl'];
    for(var count = 0 ; count < this.noOfotpDigits-1 ; count++){
     this.otpDigits.push(
      {"value":""}
     ) 
    }
  }

  


  onDigitInput(event:any,index:number){
  //  if(!event.code.startsWith('Digit')){
     // return;
    //}
    let element;
  
    if (event.code.startsWith('Digit')){
      
      if(event.currentTarget.nextElementSibling == null){
        console.log(this.otpDigits);
        this.otpDigits[index].value = event["key"];
        this.extractOtpAndVerify();
       // this.inputServiceService.capturedDataSubject.next("test");
      }else{
         element = event.srcElement.nextElementSibling;
         this.otpDigits[index].value = event["key"];
      }
         
    }
     if (event.code === 'Backspace'){
        this.otpDigits[index].value = "";
        if(event.currentTarget.previousElementSibling != null){
         element = event.srcElement.previousElementSibling;
        }
     }
     if (event.code === 'ArrowLeft'){
      if(event.currentTarget.previousElementSibling != null){
        element = event.srcElement.previousElementSibling;
      }
   }
   if (event.code === 'ArrowRight'){
    if(event.currentTarget.nextElementSibling != null){
      element = event.srcElement.nextElementSibling;
    }
 }
 if(event.code === 'Enter'){
  this.extractOtpAndVerify();
 }
     if(element == null)
         return;
     else
         element.focus();
 }
 private extractOtpAndVerify() {
  let otp = "";
  for(var count = 0 ; count < this.noOfotpDigits; count++){
    if(!isNaN(Number(this.otpDigits[count].value))){
      otp += this.otpDigits[count].value;
    }
   }
   if(otp.length == this.noOfotpDigits){
    this.inputServiceService.capturedDataSubject.next({
      nextUrl : this.nextUrl,
      userEmail: this.userEmail,
      userOtp: otp
    });
   }
  
 }
 onPaste(event:ClipboardEvent){
  console.log(event);
  if(event.clipboardData != null){
    console.log(event.clipboardData.getData('text'))
  }
 }
}
