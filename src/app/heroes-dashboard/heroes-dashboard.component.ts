import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent {
  heroes: Hero[] = []

  constructor(private heroService: HeroService){}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit(){
    this.getHeroes();
  }
}
