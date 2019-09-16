import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      address: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      address2: [''],
      city: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      state: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      zip: [
        '',
        Validators.compose([
          Validators.pattern('[0-9]{5}'),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit() {}

  isValid(name: string) {
    return (
      this.companyForm.controls[name].touched &&
      this.companyForm.controls[name].invalid
    );
  }

  updateCompany() {
    console.log(this.companyForm);
  }
}
