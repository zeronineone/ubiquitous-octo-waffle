import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  constructor() { }
  titleText : string = "You're almost done!"
  subText : string = "We sent a launch code to "
  userEmail : string = "shub.singh091@gmail.com"
  faArrowRight = faArrowRight;
  ngOnInit(): void {
  }
  otpDigits = [1,2,3,4,5,6,7,8];

  onDigitInput(event:any){
    if(!event.code.startsWith('Digit')){
      return;
    }
    let element;
  
    if (event.code !== 'Backspace'){
      
      if(event.currentTarget.nextElementSibling == null){
        alert('submit otp')
      }else{
         element = event.srcElement.nextElementSibling;
      }
         
    }
     if (event.code === 'Backspace')
         element = event.srcElement.previousElementSibling;
 
     if(element == null)
         return;
     else
         element.focus();
 }
 onPaste(event:ClipboardEvent){
  console.log(event);
 }
}
