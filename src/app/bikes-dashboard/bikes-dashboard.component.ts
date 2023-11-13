import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Bike } from '../Bike';
import { BikeService } from '../bike-service/bike.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './bikes-dashboard.component.html',
  styleUrls: ['./bikes-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('cardAnim', [
      transition('void => *', [
        style({ opacity: 0,  }),
        animate('0.5s', style({ opacity: 1 })),
    ]),
    ]),
],
})
export class BikesDashboardComponent implements OnInit{
  bikes$: Observable<Bike[]>;

  constructor(private heroService: BikeService){}

  getBikes(): void {
    this.bikes$ = this.heroService.getBikes();
  }

  ngOnInit(){
    this.getBikes();
  }
}
