import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { BikesDashboardComponent } from './bikes-dashboard/bikes-dashboard.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';

const routes: Routes = [
  { path: 'bikes', component: BikesComponent },
  { path: 'dashboard', component: BikesDashboardComponent },
  { path: 'detail/:id', component: BikeInfoComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
