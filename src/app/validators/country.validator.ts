import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export const COUNTRY_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CountryValidator),
  multi: true
};

@Directive({
  selector: '[validateCountry][formControlName],[validateCountry][formControl],[validateCountry][ngModel]',
  providers: [COUNTRY_VALIDATOR]
})

export class CountryValidator implements Validator {
  @Input() validateCountry: string;

  validate(c: AbstractControl): { [key: string]: any } {
    let phone = c.root.get(this.validateCountry);
    phone.updateValueAndValidity();
    return null;
  }
}
