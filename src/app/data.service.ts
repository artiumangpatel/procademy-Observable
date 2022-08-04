import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // dataEmitter = new EventEmitter<string>();
  dataEmitter = new Subject<string>(); //replace eventEmitter to subject

  constructor() {}

  raiseddataEmitterEvent(data: string) {
    //replace emit to next
    this.dataEmitter.next(data);
  }
}
