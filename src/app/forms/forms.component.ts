import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { HttpModuleService } from "./../http-module.service";
@Component({
  selector: 'app-forms-page',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {
  @Input()
  valueContent: string;
  editorValueType: string;

  onValueTypeChanged({ addedItems }) {
      this.editorValueType = addedItems[0].text.toLowerCase();
  }

  valueChange(value) {
      this.valueContent = value;
  }
  userDetailsForm: FormGroup;

  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  parentErrorStateMatcher = new ParentErrorStateMatcher();

  genders = [
    "Male",
    "Female",
    "Other"
  ];

  countries = [
     new Country('US', 'United States'),
     ];


  validation_messages = {
    'fullname': [
      { type: 'required', message: 'Full name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'body': [
      { type: 'maxlength', message: '' },
    ],

    'phone': [

      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ]
  };
  result$: any;
 val:any;
  constructor(private fb: FormBuilder, private httpModuleService: HttpModuleService) {
    this.result$ = httpModuleService.resolveItems().subscribe(
      res => {
        this.val= res;
        this.valueContent=res.body;
        this.editorValueType = 'markdown';
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
      // country & phone validation
    let country = new FormControl(this.countries[0], Validators.required);

    let phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    // user details form validations
    this.userDetailsForm = this.fb.group({
      fullname: ['', Validators.required ],
      body: ['', Validators.maxLength(3000)],
   //   country_phone: this.country_phone_group,
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });



  }

  onSubmitAccountDetails(value){
    console.log(value);
  }

  onSubmitUserDetails(value){
    console.log(value);
  }

}
