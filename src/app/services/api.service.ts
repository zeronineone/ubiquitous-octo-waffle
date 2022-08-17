import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigs } from '../znoconstants/znoc';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private getBaseUrl():string{
    if(window.location.hostname.startsWith("localhoat")){
      return ApiConfigs.localBaseUrl;
    }
    return ApiConfigs.prodBaseUrl;
  }

  private getHeaderWithAppCred():any{
    if(window.location.hostname.startsWith("localhoat")){
      return ApiConfigs.localHeaders;
    }
    return ApiConfigs.prodHeaders;
  }

  private getCompleteUrl(url:string):string{
    return this.getBaseUrl()+url;
  }

  public doHttpPost(url:string,requestBody:any) : Observable<any>{
    let headers = new HttpHeaders(this.getHeaderWithAppCred());
     let options = { headers: headers };
    return this.http.post<any>(this.getCompleteUrl(url), requestBody,options);
  }

}
