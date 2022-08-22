import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faEye, faEyeSlash, faFaceDizzy, faL } from '@fortawesome/free-solid-svg-icons';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router : Router,private routingService:RoutingService) { }

  faFaceDizzy = faFaceDizzy
  ngOnInit(): void {
  }
  goToLogin(){
    this.routingService.routeToLoginPage({},this.router);
  }
}
