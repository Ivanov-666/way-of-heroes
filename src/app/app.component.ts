import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageService } from './message-service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Tour of bikes';

  constructor(public messageService: MessageService){}
}
