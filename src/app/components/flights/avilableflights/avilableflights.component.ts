import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../../assets/data/data.json';
import {TranslateService} from "@ngx-translate/core";
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-avilableflights',
  templateUrl: './avilableflights.component.html',
  styleUrls: ['./avilableflights.component.css']
})
export class AvilableflightsComponent implements OnInit {
  location1!: string;
  location2!: string;
  flights: Flight[] = [];

  constructor(private _router: ActivatedRoute, private translate: TranslateService) { }
  
  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
     this.location1 = params.get('from') as string;
       this.location2 = params.get('to') as string;
      this.avilableFlights(this.location1, this.location2);

    })
  }

  avilableFlights(country1: string, country2: string) {
  this.flights= data.filter((item: { from: string; to: string; }) => item.from === country1 && item.to === country2);
 console.log(this.flights);
  } 
  

  

}




