import { Component, OnInit } from '@angular/core';
import { comapy_name } from 'src/app/app-constants';
import { faArrowRight, faCheck, faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import { InputBlockConfig } from 'src/app/domains/config-objects';


@Component({
  selector: 'app-p-input',
  templateUrl: './p-input.component.html',
  styleUrls: ['./p-input.component.css']
})
export class PInputComponent implements OnInit {
  titleText = "Welcome to "+comapy_name+"!";
  subText =  "Lets create your personal space..";
 
  continueLabel = "Continue";
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faXmark = faXmark;

  displayConfigs : InputBlockConfig[] = [
    {
      name: "email",
      label: "Enter your email",
      isVisible : true,
      isContinueVisible: true,
      inputStatus : [true,false,false]
    },
    {
      name: "password",
      label: "Create a password",
      isVisible : false,
      isContinueVisible: true,
      inputStatus : [true,false,false]
    },
    {
      name: "password",
      label: "Enter a password",
      isVisible : false,
      isContinueVisible: true,
      inputStatus : [true,false,false],
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public continueService(index : number) {
    let len = this.displayConfigs.length;
    if(index < len-1){
      this.displayConfigs[index+1].isVisible=true;
      this.displayConfigs[index+1].isContinueVisible=true;
      this.displayConfigs[index].isContinueVisible =false;
    }
  }


  }

