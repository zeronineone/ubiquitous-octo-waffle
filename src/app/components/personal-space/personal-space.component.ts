import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-space',
  templateUrl: './personal-space.component.html',
  styleUrls: ['./personal-space.component.css']
})
export class PersonalSpaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputComponentData  = {
    titleText: 'Welcome to local host',
    subText: 'Save you credentials',
    createAccountLabel: "Let's go!!",
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
  numberOfTypes = [{
    name:"Hello1"
  },
  {
    name:"Hello2"
  },
  {
    name:"Hello3"
  },
  {
    name:"Hello4"
  },
  {
    name:"Hello5"
  },
  {
    name:"Hello6"
  }] 

  listOfCreds = [{
     id:"id",
     title:"title",
     userName:"username",
     password:"pass",
     url:"url",
     description:"description",
    hint:"hint",
    createdAt:"createdAt",
    modifiedAt:"modifiedAt"
  },
  {
    id:"id",
    title:"title",
    userName:"username",
    password:"pass",
    url:"url",
    description:"description",
   hint:"hint",
   createdAt:"createdAt",
   modifiedAt:"modifiedAt"
 },
 {
  id:"id",
  title:"title",
  userName:"username",
  password:"pass",
  url:"url",
  description:"description",
 hint:"hint",
 createdAt:"createdAt",
 modifiedAt:"modifiedAt"
},
{
  id:"id",
  title:"title",
  userName:"username",
  password:"pass",
  url:"url",
  description:"description",
 hint:"hint",
 createdAt:"createdAt",
 modifiedAt:"modifiedAt"
}
,{
  id:"id",
  title:"title",
  userName:"username",
  password:"pass",
  url:"url",
  description:"description",
 hint:"hint",
 createdAt:"createdAt",
 modifiedAt:"modifiedAt"
}]

}
