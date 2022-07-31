import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CreateUserRequest, CreateUserResponse, Status, StatusType } from '../domains/config-objects';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  statusRes: Status | undefined
  createUserResponse: CreateUserResponse |undefined
  createUser(createUserRequest: CreateUserRequest): Observable<CreateUserResponse>{
    this.statusRes  = {
      code: 1231,
    message: "This is a meqf",
    type: StatusType.SUCCESS
}
   this.createUserResponse = {
    status: this.statusRes
   }

    return of(this.createUserResponse);
  }

}
