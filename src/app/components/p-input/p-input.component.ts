import { Component, OnInit } from '@angular/core';
import { comapy_name } from 'src/app/app-constants';
import { faArrowRight, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-p-input',
  templateUrl: './p-input.component.html',
  styleUrls: ['./p-input.component.css']
})
export class PInputComponent implements OnInit {
  titleText = "Welcome to "+comapy_name+"!";
  subText =  "Lets create your personal space..";
  emailLabel =  "Enter your email";
  passwordLabel = "Create a password";
  userNameLabel = "Enter a username";
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faXmark = faXmark;
  constructor() { }

  ngOnInit(): void {
  }

}
