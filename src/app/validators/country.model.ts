import * as libphonenumber from 'google-libphonenumber';

export class Country {
  iso: string;
  name: string;
  code: string;
  sampleMobilePhone: string;
  sampleFixedPhone: string;

  constructor(iso: string, name: string) {
    this.iso = iso;
    this.name = name;

    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const PNF = libphonenumber.PhoneNumberFormat;
    const PNT = libphonenumber.PhoneNumberType;
    const countryExampleMobileNumber = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE);
    const countryExampleFixedNumber = phoneUtil.getExampleNumberForType(this.iso, PNT.FIXED_LINE);
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo: https://goo.gl/3yAFiV
    if (countryExampleMobileNumber) {
      const exampleMobileNumberFormatted = phoneUtil.format(countryExampleMobileNumber, PNF.NATIONAL);
      const exampleFixedNumberFormatted = phoneUtil.format(countryExampleFixedNumber, PNF.NATIONAL);
      // We need to define how are we going to format the phone number
      // You can choose between many formats including:
      //    - NATIONAL
      //    - INTERNATIONAL
      //    - E164
      //    - RFC3966
      this.sampleMobilePhone = exampleMobileNumberFormatted;
      this.sampleFixedPhone = exampleFixedNumberFormatted;
      this.code = '+' + countryExampleMobileNumber.getCountryCode();
    }
  }
}
