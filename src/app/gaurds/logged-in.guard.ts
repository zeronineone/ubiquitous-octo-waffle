import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { RoutingService } from '../services/routing.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        return true;
      }
      console.log("Please login to continue..")
      this.routingService.routeToLoginPage({},this.router)
      return false;
  }

  constructor(private authService: AuthServiceService,private router: Router,private routingService : RoutingService) {}
  
}
