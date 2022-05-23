import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvilableflightsComponent } from './avilableflights/avilableflights.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PurchasingTicketComponent } from './purchasing-ticket/purchasing-ticket.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

export const routes: Routes = [
  { path: '', component: AvilableflightsComponent },
  { path: 'book/:id', component: PurchasingTicketComponent },
  { path: ':from/:to', component: AvilableflightsComponent }

]

@NgModule({
  declarations: [
    AvilableflightsComponent,
    PurchasingTicketComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule
  ]
})
export class FlightsModule { }
