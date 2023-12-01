import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWindowService } from '../IWindowService';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements IWindowService {
  
  isVisible$ = new BehaviorSubject(false);

  open():void {
    this.isVisible$.next(true);
  }
  close():void {
    this.isVisible$.next(false);
  }

}
