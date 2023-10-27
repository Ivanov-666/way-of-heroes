import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesDashboardComponent } from './bikes-dashboard.component';

describe('BikesDashboardComponent', () => {
  let component: BikesDashboardComponent;
  let fixture: ComponentFixture<BikesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikesDashboardComponent]
    });
    fixture = TestBed.createComponent(BikesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
