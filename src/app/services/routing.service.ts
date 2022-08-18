import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  public doRoute(url:string,stateData:any,router: Router) {
    router.navigateByUrl(url, { state : stateData });
  }

  public routeToLoginPage(stateData:any,router: Router) {
    router.navigateByUrl('/login');
  }

  public routeToVerifyPage(stateData:any,router: Router) {
    router.navigateByUrl('/login/verify', { state : stateData });
  }
  public routeToSpacePage(stateData:any,router: Router) {
    router.navigateByUrl('/space',{ state : stateData });
  }

}
