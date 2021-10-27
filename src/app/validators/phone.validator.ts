import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as libphonenumber from 'google-libphonenumber';

export class PhoneValidator {
  // Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
  static validCountryPhone = (countryControl: AbstractControl): ValidatorFn => {
    let subscribe: boolean = false;

    return (phoneControl: AbstractControl): {[key: string]: boolean} => {
      if (!subscribe) {
        subscribe = true;
        countryControl.valueChanges.subscribe(() => {
          phoneControl.updateValueAndValidity();
        });
      }

      if(phoneControl.value !== ""){
        try{
          const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
          let phoneNumber = "" + phoneControl.value + "",
              region = countryControl.value.iso,
              number = phoneUtil.parse(phoneNumber, region),
              isValidNumber = phoneUtil.isValidNumber(number);

          if(isValidNumber){
            return null;
          }
        }catch(e){
          // console.log(e);
          return {
            validCountryPhone: true
          };
        }

        return {
          validCountryPhone: true
        };
      }
      else{
        return null;
      }
    };
  };
}
