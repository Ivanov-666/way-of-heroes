import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Bike} from '../Bike';
import {BikeService} from '../bike-service/bike.service';
import { ModalService } from '../modal-service/modal.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeInfoComponent {
  bike$: Observable<Bike>;

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
    this.bike$ = this.bikeService.getBike(id);
  }

  goBack(): void{
    this.location.back();
  }
  edit(): void{
    this.modalService.open();
  }
}
