import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';
import { BackgroundAction } from './domains/config-objects';
import { AuthServiceService } from './services/auth-service.service';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sankalan';

  @ViewChild(ParticlesBgComponent, {static : true}) particlesBgComponent : ParticlesBgComponent | undefined;
  
  backgroundActionType: Subject<BackgroundAction> = new Subject<BackgroundAction>();;

  updateBgEvent(backgroundAction : BackgroundAction){
    console.log("updateBgEvent "+backgroundAction);
    this.particlesBgComponent?.updateBgEvent(backgroundAction)
    console.log("IN APP COMP this.backgroundActionType "+this.backgroundActionType);
  }
  constructor(private router: Router, private authServiceService : AuthServiceService, private routingService : RoutingService) { }

  ngOnInit(): void {
    
   /* if(this.authServiceService.isLoggedIn()){
      this.routingService.routeToSpacePage({},this.router);
    }else{
      this.routingService.routeToLoginPage({},this.router);
    }*/ 
  }

}
