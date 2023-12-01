import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { FilterService } from '../filter-service/filter-service.service';

@Component({
  selector: 'app-filter-bike-list',
  templateUrl: './filter-bike-list.component.html',
  styleUrls: ['./filter-bike-list.component.scss']
})
export class FilterBikeListComponent {
  
  createBikeForm: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private filterService: FilterService) {}
  
  ngOnInit(): void {this._createForm();}

  private _createForm() {
      this.createBikeForm = this.fb.group({
          cost: '',
          weight: '',
          isSport: '',
      });
  }
  submit(){

    this.filterService.close();
  }
}
