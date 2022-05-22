import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsModule } from './components/flights/flights.module';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'flights', 
    loadChildren: () => import('./components/flights/flights.module').then(m => FlightsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
