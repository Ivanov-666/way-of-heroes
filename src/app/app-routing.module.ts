import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';

const routes: Routes = [
  { path: 'bikes', component: HeroesComponent },
  { path: 'dashboard', component: HeroesDashboardComponent },
  { path: 'detail/:id', component: HeroInfoComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
