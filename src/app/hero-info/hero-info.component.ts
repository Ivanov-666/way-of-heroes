import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent {
  @Input() hero: Hero;
}
