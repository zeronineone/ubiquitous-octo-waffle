import { Component, OnInit } from '@angular/core';
import { comapy_name } from 'src/app/app-constants';


@Component({
  selector: 'app-p-input',
  templateUrl: './p-input.component.html',
  styleUrls: ['./p-input.component.css']
})
export class PInputComponent implements OnInit {
  titleText = "Welcome to "+comapy_name+"!";
  subText =  "Let’s offload our memory";
  constructor() { }

  ngOnInit(): void {
  }

}
