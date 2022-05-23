import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.css']
})
export class PurchasingTicketComponent implements OnInit {

  Purchasingticketformgroup:FormGroup;
  constructor(private fb:FormBuilder) {
    this.Purchasingticketformgroup=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3)]],
      PassengerPhone:[''],
      PassengerAge:[''],
      TripID:[],
      TripFare:[],
    })
   }

  ngOnInit(): void {
  }
  // purchTicket(userName:string,phone:number,userAge:number,tripId:any,tripFare:number,ticketsnumber:number){
  //   // if (localStorage.getItem('Fav' + id) === null) {
  //     localStorage.setItem(userName + tripId,userName+ '#$'+ phone + '#$' + userAge + '#$' + tripId + '#$' + tripFare + '#$' + ticketsnumber);
  //     // this.myapp.successmessage(ProdName +" Added To Wish List Successfuly");
  //   // } else {
  //     // this.myapp.showWarning(ProdName +" Already Added Before","Oops");
  //   // }
  // }
  add() {
    localStorage.setItem('user',JSON.stringify(this.Purchasingticketformgroup.value));
    
  }
}
