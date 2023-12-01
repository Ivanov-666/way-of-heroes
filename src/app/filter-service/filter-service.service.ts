import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IWindowService } from "../IWindowService";
import { BikeListFilter} from '../BikeListFilter';

@Injectable({
  providedIn: 'root'
})
export class FilterService implements IWindowService {

  filterList: BikeListFilter;
  isVisible$ = new BehaviorSubject(false);

  open():void {
    this.isVisible$.next(true);
  }
  close():void {
    this.isVisible$.next(false);
  }
  updateFilter(filterList: BikeListFilter): void{
    this.filterList = filterList;
  }
  getFilter(): BikeListFilter{
    return this.filterList;
  }
}
