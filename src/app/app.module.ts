import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { MessagesComponent } from './message-component/messages.component';
import { BikesDashboardComponent } from './bikes-dashboard/bikes-dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BikeSearchComponent } from './bike-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalBikeListComponent } from './modal-bike-list/modal-bike-list.component';
import { ModalBikeInfoComponent } from './modal-bike-info/modal-bike-info.component';
import { FilterBikeListComponent } from './filter-bike-list/filter-bike-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeInfoComponent,
    MessagesComponent,
    BikesDashboardComponent,
    BikeSearchComponent,
    ModalWindowComponent,
    ModalBikeListComponent,
    ModalBikeInfoComponent,
    FilterBikeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }