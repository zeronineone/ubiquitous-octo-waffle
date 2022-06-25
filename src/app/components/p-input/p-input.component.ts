import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { comapy_name } from 'src/app/app-constants';
import { faArrowRight, faCheck, faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BackgroundAction, CreateUserRequest, InputBlockConfig } from 'src/app/domains/config-objects';
import { NgForm, Validators } from '@angular/forms';
import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-p-input',
  templateUrl: './p-input.component.html',
  styleUrls: ['./p-input.component.css']
})
export class PInputComponent implements OnInit {

  public BackgroundActionEnum = BackgroundAction;
  titleText = "Welcome to "+comapy_name+"!";
  subText =  "Lets create your personal space..";
  createAccountLabel = "Create your space!";
  continueLabel = "Continue";
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faXmark = faXmark;
  isSubmitVisible = false;

  @Output() updateBgEvent:EventEmitter<BackgroundAction> = new EventEmitter<BackgroundAction>();

  displayConfigs : InputBlockConfig[] = [
    {
      name: "useremail",
      label: "Enter your email",
      type: "text",
      isVisible : true,
      isContinueVisible: true,
      inputStatus : [true,false,false]
    },
    {
      name: "userpassword",
      label: "Create a password",
      type: "password",
      isVisible : false,
      isContinueVisible: true,
      inputStatus : [true,false,false]
    },
    {
      name: "username",
      label: "Enter a username",
      type: "text",
      isVisible : false,
      isContinueVisible: true,
      inputStatus : [true,false,false],
    },
    
  ]

  createUsers: CreateUserRequest[] = [];
  createUserRequest : CreateUserRequest = {
    username : "",
    userpassword: "",
    useremail: "",
  };
  constructor(private userDetailsService: UserDetailsService) { 

  }

  ngOnInit(): void {
   
  }
  createUserAccount(createUserForm : NgForm) {
   // alert("HELLO");
   /* this.createUserRequest.useremail = createUserForm.value["useremail"];
    this.createUserRequest.userpassword = createUserForm.value["userpassword"];
    this.createUserRequest.username = createUserForm.value["username"];*/

      this.createUserRequest.useremail = this.displayConfigs[0].value;
    this.createUserRequest.userpassword = this.displayConfigs[1].value;
  this.createUserRequest.username = this.displayConfigs[2].value;
 
    this.userDetailsService.createUser( this.createUserRequest).subscribe((status)=> {
      console.log(status);
      //this.updateBg(BackgroundAction.PERSONAL_SPACE);
    }
    );
    setTimeout(() => {
      this.updateBg(BackgroundAction.PERSONAL_SPACE);
     }, 3000);
  }
   
  

   continueService(index : number) {
    let len = this.displayConfigs.length;
    if(index < len-1){
      this.displayConfigs[index+1].isVisible=true;
      this.displayConfigs[index+1].isContinueVisible=true;
      this.displayConfigs[index].isContinueVisible =false;
    }else{
      this.isSubmitVisible = true;
      for(var displayConfig of this.displayConfigs){
        displayConfig.isContinueVisible = false;
      }
    }
    console.log(this.displayConfigs[index])
  }

  updateBg(backgroundAction :BackgroundAction){
    console.log("updateBg "+backgroundAction);
    this.updateBgEvent.emit(backgroundAction);
  }

  }

