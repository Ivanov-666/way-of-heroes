import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Bike } from '../Bike';
import { BikeService } from '../bike-service/bike.service';
import { ModalService } from '../modal-service/modal.service';

@Component({
  selector: 'app-modal-bike-info',
  templateUrl: './modal-bike-info.component.html',
  styleUrls: ['./modal-bike-info.component.scss']
})
export class ModalBikeInfoComponent implements OnInit{
  @Input() bike: Bike;

  editBikeForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private bikeService: BikeService,
    private modalService: ModalService) {}
  ngOnInit(): void {this._createForm();}

  private _createForm() {
      this.editBikeForm = this.fb.group({
          name: this.bike.name,
          rate: this.bike.rate,
          img: this.bike.img,
          cost: this.bike.cost,
          weight: this.bike.weight,
      });
  }
  submit(){
    this.editBikeForm.value.id = this.bike.id;
    this.bikeService.saveBike(this.editBikeForm.value).subscribe();
    this.modalService.close();
  }

}
