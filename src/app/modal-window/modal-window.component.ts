import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../modal-service/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalWindowComponent{
  constructor(public modalService: ModalService){}
}
