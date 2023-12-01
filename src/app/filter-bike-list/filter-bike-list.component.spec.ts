import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBikeListComponent } from './filter-bike-list.component';

describe('FilterBikeListComponent', () => {
  let component: FilterBikeListComponent;
  let fixture: ComponentFixture<FilterBikeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBikeListComponent]
    });
    fixture = TestBed.createComponent(FilterBikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
