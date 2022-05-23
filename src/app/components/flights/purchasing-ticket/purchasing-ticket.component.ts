import { Passenger } from '../../../models/passenger';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidatorService } from 'src/app/services/customvalidator.service';
import data from '../../../../assets/data/data.json';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../../models/flight';
import {TranslateService} from "@ngx-translate/core";

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
    ,private _router:ActivatedRoute, private translate: TranslateService) {
    this.Purchasingticketformgroup=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      PassengerPhone:['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      PassengerAge:['',[Validators.required, Validators.min(18), Validators.max(100)]],
      TicketsNumber:['',[Validators.required, Validators.min(1), Validators.max(10)]]
    })

   }
   useLanguage(language: string): void {
    this.translate.use(language);
}
  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      this.flightId = params.get('id');
      
       this.bookFlight(this.flightId);
 
     })
    this.getPassengerinfo();
  }
 
  get phone() {
    return this.Purchasingticketformgroup.controls['PassengerPhone'];
  }


   isValidControl(name: string): boolean {
    return this.Purchasingticketformgroup.controls[name].valid;
  }
  isInValidAndTouched(name: string): boolean {
    return this.Purchasingticketformgroup.controls[name].invalid && (this.Purchasingticketformgroup.controls[name].dirty || this.Purchasingticketformgroup.controls[name].touched);
  }
  isControlHasError(name: string, error: string): boolean {
    return this.Purchasingticketformgroup.controls[name].invalid && this.Purchasingticketformgroup.controls[name].errors?.[error];
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
