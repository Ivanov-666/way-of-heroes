import { Component } from '@angular/core';
import { Bike } from '../Bike';
import { HeroService } from '../hero-service/hero.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss'],
  animations: [
    trigger('cardAnim', [
      transition('void => *', [
        style({ opacity: 0,  }),
        animate('2s', style({ opacity: 1 })),
    ]),
    ]),
],
})
export class HeroesDashboardComponent {
  bikes: Bike[] = [];

  constructor(private heroService: HeroService){}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(bikes => this.bikes = bikes.sort((a,b)=>a.rate>b.rate ?  -1 : 1).slice(1, 5));
  }

  ngOnInit(){
    this.getHeroes();
  }
}
