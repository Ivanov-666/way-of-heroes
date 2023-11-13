import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MessageService } from '../message-service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {

  @Input() message: String;

  constructor(public messageService: MessageService){}
}
