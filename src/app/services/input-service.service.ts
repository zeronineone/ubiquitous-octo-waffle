import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BgUpdateEvent } from '../domains/config-objects';

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {

  constructor() { }

  capturedDataSubject = new Subject();


  getCapturedData(){
    return this.capturedDataSubject.asObservable();
  }

  updateBackgroundSubject = new Subject<BgUpdateEvent>();


  getUpdateBackgroundSubject(){
    return this.updateBackgroundSubject.asObservable();
  }
  

}
