import { Component } from '@angular/core';
import { Bike } from '../Bike';
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss']
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
