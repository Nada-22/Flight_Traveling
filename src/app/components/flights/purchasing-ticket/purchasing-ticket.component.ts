import { Passenger } from './../../../models/passenger';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidatorService } from 'src/app/services/customvalidator.service';
import data from '../../../../assets/data/data.json';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../../models/flight';
import {TranslateService} from "@ngx-translate/core";
import { ValidationService } from 'src/app/services/validation.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.css']
})
export class PurchasingTicketComponent implements OnInit {
  passenger = new Passenger();
  submitted = false;
  flightId!: number ;
  flight = new Flight();
  flights: Flight[] = [];
  Passengers: Passenger[] = [];
  Bookform: FormGroup;
 
  constructor(private fb: FormBuilder, private customValidator: CustomvalidatorService
    ,private _router:ActivatedRoute, private translate: TranslateService,private _validation:ValidationService) {
    this.Bookform=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      PassengerEmail: ['', [Validators.required, Validators.email]],
      PassengerAge:['',[Validators.required, Validators.min(18), Validators.max(100)]],
      TicketsNumber: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      Flightid:[''],
    })
   }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      this.flightId = params.get('id') as any;
       this.showFlight(this.flightId);
 
    })
  }
 
  isValidControl(name: string): boolean {
    return this._validation.isValidControl(name,this.Bookform);
  }
  isInValidAndTouched(name: string): boolean {
    return this._validation.isInValidAndTouched(name,this.Bookform);
  }
  isControlHasError(name: string, error: string): boolean {
    return this._validation.isControlHasError(name, error,this.Bookform);
  }
  showFlight(flightid: number) {
    this.flight= data.find((item: { id: number; }) => item.id == flightid);
   console.log(this.flight);
      console.log(data);
    }
  bookTicket() {
  // store useres
    this.Passengers=JSON.parse(localStorage.getItem('Passengers')||'[]');
    this.Bookform.patchValue({ Flightid: this.flight.id });
    this.Passengers.push(this.Bookform.value);
    localStorage.setItem('Passengers', JSON.stringify(this.Passengers));

// store flights
    this.flights = JSON.parse(localStorage.getItem('flights') || '[]');
    this.flights.push(this.flight);
    localStorage.setItem('flights', JSON.stringify(this.flights));

    Swal.fire(
      'Good job!',
      'your ticket has been booked successfully',
      'success'
    )
  }


}
