import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formFlight = new FormGroup({});

  constructor(private translate: TranslateService, private _formBuilder: FormBuilder) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }
 

  ngOnInit(): void {
    this.formFlight = this._formBuilder.group({
      ownCountry: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      reachedCountry: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });
  }

  isValidControl(name: string): boolean {
    return this.formFlight.controls[name].valid;
  }
  isInValidAndTouched(name: string): boolean {
    return this.formFlight.controls[name].invalid && (this.formFlight.controls[name].dirty || this.formFlight.controls[name].touched);
  }
  isControlHasError(name: string, error: string): boolean {
    return this.formFlight.controls[name].invalid && this.formFlight.controls[name].errors?.[error];
  }
}
