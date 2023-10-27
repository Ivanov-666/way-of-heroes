import { Component, OnInit, Input } from '@angular/core';
import {Bike} from '../Bike';
import {BikeService} from '../bike-service/bike.service';
import { ModalService } from '../modal-service/modal.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.scss']
})
export class BikeInfoComponent {
  bike: Bike | null;

  constructor(private bikeService: BikeService, 
    private route: ActivatedRoute,
    private location: Location,
    public modalService: ModalService,
    ) {}

  ngOnInit() {
    this.getBike();
  }

  getBike(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bikeService.getBike(id)
    .subscribe(bike => this.bike = bike);
  }

  goBack(): void{
    this.location.back();
  }
  edit(): void{
    this.modalService.open();
  }
}
