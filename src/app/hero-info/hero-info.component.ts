import { Component, OnInit, Input } from '@angular/core';
import {Bike} from '../Bike';
import {HeroService} from '../hero-service/hero.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NonNullAssert } from '@angular/compiler';


@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent {
  hero: Bike| null;

  constructor(private heroService: HeroService, 
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.heroService.saveHero(this.hero).subscribe(() => this.goBack());
  }
}
