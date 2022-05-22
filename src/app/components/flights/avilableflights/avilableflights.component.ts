import { Component, OnInit } from '@angular/core';
import data from '../../../../assets/data/data.json';
@Component({
  selector: 'app-avilableflights',
  templateUrl: './avilableflights.component.html',
  styleUrls: ['./avilableflights.component.css']
})
export class AvilableflightsComponent implements OnInit {
  
  public countryList:{from:string,to:string, fare:string}[] = data.results;

  constructor() { }

  ngOnInit(): void {
  }

}
