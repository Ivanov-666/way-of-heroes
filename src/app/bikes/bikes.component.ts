import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {Bike} from '../Bike';
import { BikeService } from '../bike-service/bike.service';
import { ModalService } from '../modal-service/modal.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnim', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1})),
    ]),
    ]),
],
})
export class BikesComponent implements OnInit {
  bikes$: Observable<Bike[]>;

  constructor(private bikeService: BikeService, 
    public modalService: ModalService) { }

  getBikes(): void {
    this.bikes$ = this.bikeService.getBikes();
  }

  ngOnInit() {
    this.getBikes();
  }

  add(): void{
    this.modalService.open();
  }

  delete(bike: Bike): void{
    this.bikeService.deleteBike(bike).subscribe();
    this.getBikes();
  }

}
