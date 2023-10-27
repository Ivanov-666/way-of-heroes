import { Component, OnInit } from '@angular/core';
import { Bike } from '../Bike';
import { BikeService } from '../bike-service/bike.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './bikes-dashboard.component.html',
  styleUrls: ['./bikes-dashboard.component.scss'],
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
  bikes: Bike[] = [];

  constructor(private heroService: BikeService){}

  getBikes(): void {
    this.heroService.getBikes()
        .subscribe(bikes => this.bikes = bikes.sort((a,b)=>a.rate>b.rate ?  -1 : 1).slice(0, 5));
  }

  ngOnInit(){
    this.getBikes();
  }
}
