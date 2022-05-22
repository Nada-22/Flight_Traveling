import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvilableflightsComponent } from './avilableflights/avilableflights.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

export const routes: Routes = [
  { path: '', component: AvilableflightsComponent },
  { path: ':from/:to', component: AvilableflightsComponent },

]

@NgModule({
  declarations: [
    AvilableflightsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),MatTableModule,MatCardModule,MatButtonModule
  ]
})
export class FlightsModule { }
