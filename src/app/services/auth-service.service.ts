import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../domains/config-objects';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string ) {
    return this.http.post<User>('/api/login', {email, password})
        .subscribe(res => this.setSession); 
       // .shareReplay();
}
      
private setSession(authResult: { expiresIn: any; idToken: string; }) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}          

logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
}

public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
    return !this.isLoggedIn();
}

getExpiration() {let expiration = localStorage.getItem("expires_at");
    if(expiration == null){
      expiration = "";
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
}    
}


