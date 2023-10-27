import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }

  isVisible$ = new BehaviorSubject(false);

  open():void {
    this.isVisible$.next(true);
  }
  close():void {
    this.isVisible$.next(false);
  }

}
