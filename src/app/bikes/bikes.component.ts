import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
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
  bikes: Bike[];

  constructor(private bikeService: BikeService, 
    public modalService: ModalService) { }

  getBikes(): void {
    this.bikeService.getBikes()
        .subscribe(bikes => this.bikes = bikes);
  }

  ngOnInit() {
    this.getBikes();
  }

  add(): void{
    this.modalService.open();
  }

  delete(bike: Bike): void{
    this.bikes = this.bikes.filter(h => h !== bike);
    this.bikeService.deleteBike(bike).subscribe();
  }

}
