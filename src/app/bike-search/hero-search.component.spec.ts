import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSearchComponent } from './hero-search.component';

describe('BikeSearchComponent', () => {
  let component: BikeSearchComponent;
  let fixture: ComponentFixture<BikeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikeSearchComponent]
    });
    fixture = TestBed.createComponent(BikeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
