import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-personal-space',
  templateUrl: './personal-space.component.html',
  styleUrls: ['./personal-space.component.css']
})
export class PersonalSpaceComponent implements OnInit {

  constructor(private router: Router, private routingService : RoutingService) { }

  ngOnInit(): void {
  }
  navigateTo(conf : {
    name:string,
    url:string
  }){
    this.routingService.doRoute(conf.url,{},this.router);
  }
  numberOfTypes = [{
    name:"Credentials",
    url:"/space/blackhole"
  },
  {
    name:"Resources",
    url:"/space/neptune"
  },
  {
    name:"Moments",
    url:"/space/moments"
  },
  {
    name:"Tasks",
    url:"/space/tasks"
  }] 

 

}
