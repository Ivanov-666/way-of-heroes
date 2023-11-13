import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Bike } from '../Bike';
import { BikeService } from '../bike-service/bike.service';
 
@Component({
  selector: 'app-bike-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeSearchComponent implements OnInit {
  bikes$: Observable<Bike[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private bikeService: BikeService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.bikes$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.bikeService.searchBikes(term)),
    );
  }
}
