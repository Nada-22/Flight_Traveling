import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvilableflightsComponent } from './avilableflights/avilableflights.component';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: AvilableflightsComponent }
]

@NgModule({
  declarations: [
    AvilableflightsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class FlightsModule { }
