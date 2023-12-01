import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {IWindowService} from '../IWindowService';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalWindowComponent{
  @Input() windowService: IWindowService; 
}
