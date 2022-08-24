import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authServiceService: AuthServiceService,private router : Router, private routingService :RoutingService) { }

  ngOnInit(): void {
    if(this.authServiceService.isLoggedIn()){
      this.authServiceService.logout();
    }
    this.routingService.routeToLoginPage({},this.router);
  }

}
