import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Bike } from '../Bike';
import { BikeService } from '../bike-service/bike.service';
import { ModalService } from '../modal-service/modal.service';
  
@Component({
  selector: 'app-modal-bike-list',
  templateUrl: './modal-bike-list.component.html',
  styleUrls: ['./modal-bike-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBikeListComponent implements OnInit{

    bike: Bike;
  
    createBikeForm: FormGroup;
  
    constructor(private fb: FormBuilder, 
      private bikeService: BikeService,
      private modalService: ModalService) {}
    
    ngOnInit(): void {this._createForm();}
  
    private _createForm() {
        this.createBikeForm = this.fb.group({
            name: '',
            rate: '',
            img: '',
            cost: '',
            weight: '',
        });
    }
    submit(){
      this.bikeService.addBike(this.createBikeForm.value).subscribe();
      this.modalService.close();
    }
  
}
