import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  num : number=0;
  msgSource = new BehaviorSubject(0);
  //msgSource = new Subject();
  currentData = this.msgSource.asObservable();

  constructor() { }

 changeValue(v:number) {
   this.msgSource.next(v+1);
 
 }

}
