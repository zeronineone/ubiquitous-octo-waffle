import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigs } from '../znoconstants/znoc';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private http: HttpClient) { }

  localHost = "localhost";

  private getBaseUrl():string{
    if(window.location.hostname.startsWith(this.localHost)){
      return ApiConfigs.localBaseUrl;
    }
    return ApiConfigs.prodBaseUrl;
  }

  private getHeaderWithAppCred():any{
    let headers : any
    if(window.location.hostname.startsWith(this.localHost)){
      headers = ApiConfigs.localHeaders;
    }else{
      headers = ApiConfigs.prodHeaders;
    }
    return headers;
  }

  private getHeaderWithAppCredWithAutService(authService : AuthServiceService):any{
    let headers : any
    if(window.location.hostname.startsWith(this.localHost)){
      headers = ApiConfigs.localHeaders;
    }else{
      headers = ApiConfigs.prodHeaders;
    }
    if(authService.isLoggedIn()){
      headers['user-id'] = authService.getSession().userId;
      headers['token'] = authService.getSession().token;
      headers['user-type'] = authService.getSession().userType;
    }
    return headers;
  }

  private getCompleteUrl(url:string):string{
    return this.getBaseUrl()+url;
  }

  public doHttpPost(url:string,requestBody:any) : Observable<T>{
    let headers = new HttpHeaders(this.getHeaderWithAppCred());
     let options = { headers: headers };
    return this.http.post<T>(this.getCompleteUrl(url), requestBody,options);
  }

  public doHttpPostWithAutService(url:string,requestBody:any,authService : AuthServiceService) : Observable<T>{
    let headers = new HttpHeaders(this.getHeaderWithAppCredWithAutService(authService));
     let options = { headers: headers };
    return this.http.post<T>(this.getCompleteUrl(url), requestBody,options);
  }

}
