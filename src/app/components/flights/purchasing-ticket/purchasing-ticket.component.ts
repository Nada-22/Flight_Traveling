import { Passenger } from './../../models/passenger';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidatorService } from 'src/app/services/customvalidator.service';
import data from '../../../../assets/data/data.json';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.css']
})
export class PurchasingTicketComponent implements OnInit {
  passenger = new Passenger();
  submitted = false;
  flightId: any;
  flight= new Flight();
  Purchasingticketformgroup:FormGroup;
  constructor(private fb: FormBuilder, private customValidator: CustomvalidatorService
    ,private _router:ActivatedRoute) {
    this.Purchasingticketformgroup=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3)],this.customValidator.userNameValidator.bind(this.customValidator)],
      PassengerPhone:['',[Validators.required]],
      PassengerAge:['',[Validators.required]],
      TicketsNumber:['',[Validators.required]]
    })

   }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      this.flightId = params.get('id');
      
       this.bookFlight(this.flightId);
 
     })
    this.getPassengerinfo();
  }
  get name() {
    return this.Purchasingticketformgroup.controls['PassengerName'];
  }
  get phone() {
    return this.Purchasingticketformgroup.controls['PassengerPhone'];
  }

  get age() {
    return this.Purchasingticketformgroup.controls['PassengerAge'];
  }
  
   get num() {
    return this.Purchasingticketformgroup.controls['TicketsNumber'];
  }
  purchTicket() {
    localStorage.setItem('user', JSON.stringify(this.Purchasingticketformgroup.value));
    localStorage.setItem('flight', JSON.stringify(this.flight));
    
  }
  getPassengerinfo() {
    this.passenger = JSON.parse(localStorage.getItem('user')||'[]');
    console.log(this.passenger.PassengerName);
  }
  bookFlight(flightid: number) {
    // alert(flightid);
  this.flight= data.find((item: { id: number; }) => item.id == flightid);
 console.log(this.flight);
    console.log(data);
  }
}
