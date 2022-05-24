import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  isValidControl(name: string,formValidation:any): boolean {
    return formValidation.controls[name].valid;
  }
  isInValidAndTouched(name: string,formValidation:any): boolean {
    return formValidation.controls[name].invalid && (formValidation.controls[name].dirty || formValidation.controls[name].touched);
  }
  isControlHasError(name: string, error: string,formValidation:any): boolean {
    return formValidation.controls[name].invalid && formValidation.controls[name].errors?.[error];
  }
}
