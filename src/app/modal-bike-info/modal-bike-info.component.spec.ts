import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBikeInfoComponent } from './modal-bike-info.component';

describe('ModalBikeInfoComponent', () => {
  let component: ModalBikeInfoComponent;
  let fixture: ComponentFixture<ModalBikeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBikeInfoComponent]
    });
    fixture = TestBed.createComponent(ModalBikeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
