import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {

  constructor() { }

  capturedDataSubject = new Subject();


  getCapturedData(){
    return this.capturedDataSubject.asObservable();
  }
  

}
