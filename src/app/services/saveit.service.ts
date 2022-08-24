import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StatusType, UserType } from '../domains/config-objects';
import { CreateCredentialsRequest, GetCredentialsRequest } from '../domains/request-opjects';
import { CredentialsResponse, OtpResponse, TokenResponse } from '../domains/response-opjects';
import { ApiConfigs } from '../znoconstants/znoc';
import { ApiService } from './api.service';
import { AuthServiceService } from './auth-service.service';
import { LocalStorageService } from './local-storage.service';
import { RoutingService } from './routing.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveitService {
  createCredentialsRequest: any;

  constructor(private http: HttpClient, 
    private localStorageService: LocalStorageService,
    private apiService : ApiService<CredentialsResponse>,
    private routingService : RoutingService,
    private authService : AuthServiceService) { }
    
    credentialsResponse : CredentialsResponse | undefined;
    
    createCredentials(createCredentialsRequest:CreateCredentialsRequest) : Observable<CredentialsResponse>{
     return this.apiService.doHttpPostWithAutService(ApiConfigs.createCredentials,createCredentialsRequest,this.authService);
    }


    getCredentialsRequest : GetCredentialsRequest | undefined
    getCredentials(ids:string[])  : Observable<CredentialsResponse>{

        this.getCredentialsRequest = {
          ids : ids
        }
      
  
     return this.apiService.doHttpPostWithAutService(ApiConfigs.getCredentials,this.getCredentialsRequest,this.authService);
    }
}
