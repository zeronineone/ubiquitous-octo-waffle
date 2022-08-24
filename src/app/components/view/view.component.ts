import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight, faEye, faEyeSlash, faL } from '@fortawesome/free-solid-svg-icons';
import { BlackHole } from 'src/app/domains/response-opjects';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }
  @Input() credentialsData : BlackHole | undefined;

  faArrowRight = faArrowRight;
  faEye = faEye;
  faEyeSlash = faEyeSlash

  ngOnInit(): void {
    console.log(this.credentialsData);
      if(this.credentialsData != undefined && this.credentialsData != null){
        this.displayConfigs = []
          Object.entries(this.credentialsData).forEach(([key, value], innerIndex) => {
            let type = key == 'password' ? key:'text';
            let isSensitive = type == 'password' ? true:false;
            let credConf = {name:this.camalCaseToTitleCase(key),value:value,order:innerIndex,type:type,isSensitive:isSensitive,isSesitiveVisible:false};
            this.displayConfigs.push(credConf);
          });
         
      }
  }

  toggleSensitivity(details:{
    name : string,
    value :string,
    order : Number,
    type : string
    isSensitive : boolean,
    isSesitiveVisible:boolean
  }){
    if(details.isSensitive){
      if(details.isSesitiveVisible){
        details.type = 'password'
        details.isSesitiveVisible = false;
      }else{
        details.type = 'text'
        details.isSesitiveVisible = true;
      }
  }

  }
  camalCaseToTitleCase(input:string):string{
    if(input == null || input == undefined){
      return "";
    }
    const result = input.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1); 
  }
  displayConfigs = [
    {
      name : "",
      value : "",
      order : 1,
      type : "",
      isSensitive : true,
      isSesitiveVisible:false
    }
  ]

}
