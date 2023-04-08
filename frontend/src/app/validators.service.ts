import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {}
  matchingPasswords(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(passwordKey);
      const confirmPassword = control.get(confirmPasswordKey);

      if (password?.value !== confirmPassword?.value) {
        return { 'passwordsNotMatch': true };
      }
      return null;
    };
  }


}
