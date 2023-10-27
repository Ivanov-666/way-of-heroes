import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBikeListComponent } from './modal-bike-list.component';

describe('ModalBikeListComponent', () => {
  let component: ModalBikeListComponent;
  let fixture: ComponentFixture<ModalBikeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBikeListComponent]
    });
    fixture = TestBed.createComponent(ModalBikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
