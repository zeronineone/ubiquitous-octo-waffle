import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigs } from '../znoconstants/znoc';

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
    if(window.location.hostname.startsWith(this.localHost)){
      return ApiConfigs.localHeaders;
    }
    return ApiConfigs.prodHeaders;
  }

  private getCompleteUrl(url:string):string{
    return this.getBaseUrl()+url;
  }

  public doHttpPost(url:string,requestBody:any) : Observable<T>{
    let headers = new HttpHeaders(this.getHeaderWithAppCred());
     let options = { headers: headers };
    return this.http.post<T>(this.getCompleteUrl(url), requestBody,options);
  }

}
