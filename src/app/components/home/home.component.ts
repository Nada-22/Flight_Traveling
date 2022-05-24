import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formFlight = new FormGroup({});

  constructor(private translate: TranslateService, private _formBuilder: FormBuilder,
             private _validation: ValidationService) { }
 

  ngOnInit(): void {
    this.formFlight = this._formBuilder.group({
      ownCountry: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      reachedCountry: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });
  }

  isValidControl(name: string): boolean {
    return this._validation.isValidControl(name,this.formFlight);
  }
  isInValidAndTouched(name: string): boolean {
    return this._validation.isInValidAndTouched(name,this.formFlight);
  }
  isControlHasError(name: string, error: string): boolean {
    return this._validation.isControlHasError(name, error,this.formFlight);
  }
}
