import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../../assets/data/data.json';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-avilableflights',
  templateUrl: './avilableflights.component.html',
  styleUrls: ['./avilableflights.component.css']
})
export class AvilableflightsComponent implements OnInit {
  location1!: any;
  location2!: any;
  flights: any[] = [];
  displayedColumns: string[] = ['id', 'from', 'to', 'fare','departure','arreval'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  // data: any[] = this.flights;
  public countryList:{from:string,to:string, fare:string}[] = data;

 
  constructor(private _router: ActivatedRoute, private translate: TranslateService) { 
    // translate.setDefaultLang('en');
    // translate.use('en');

  }
  useLanguage(language: string): void {
    this.translate.use(language);
}
  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
     this.location1 = params.get('from');
       this.location2 = params.get('to');
      this.avilableFlights(this.location1, this.location2);

    })
  }
  avilableFlights(country1: string, country2: string) {
    
  this.flights= data.filter((item: { from: string; to: string; }) => item.from === country1 && item.to === country2);
 console.log(this.flights);
 
  } 
  

  

}




