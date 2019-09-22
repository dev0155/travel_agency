import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppState } from 'src/store';
import { Store, select } from '@ngrx/store';
import ICompany from 'src/store/models/ICompany.model';
import { CompanyActions } from 'src/store/actions/company.actions';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;
  company$ = this.store.pipe(select('company'));

  private companyId: number = null;
  private addressId: number = null;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.createForm();
    this.fillForm();
  }

  public isValid(name: string): boolean {
    return (
      this.companyForm.controls[name].touched &&
      this.companyForm.controls[name].invalid
    );
  }

  public onCompanyBtn(): void {
    if (this.companyId) {
      this.store.dispatch(
        CompanyActions.update.request({
          id: this.companyId,
          company: this.transformedData,
        })
      );
    } else {
      this.store.dispatch(
        CompanyActions.create.request({ company: this.transformedData })
      );
    }
  }

  public defaultClear(controlName: string): void {
    if (!this.companyForm.get(controlName).dirty) {
      this.companyForm.get(controlName).setValue('');
    }
  }

  private createForm(): void {
    this.companyForm = this.fb.group({
      contactEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],

      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      country: [
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
      city: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      street: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z0-9 ]*'),
        ]),
      ],
      address1: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      address2: [''],
      zip: [
        '',
        Validators.compose([
          Validators.pattern('[0-9]{5}'),
          Validators.required,
        ]),
      ],
    });
  }

  private getControlValue(name: string) {
    return this.companyForm.get(name).value;
  }

  private get transformedData(): ICompany {
    const value = this.getControlValue('address2');
    const address2 = value === '' ? null : value;
    const { id, contactEmail, name, ...address } = this.companyForm.value;

    return {
      contactEmail,
      name,
      address: {
        ...address,
        address2,
        id: this.addressId,
      },
    };
  }

  private fillForm(): void {
    this.company$.subscribe((company) => {
      const { id, address, ...info } = company;
      this.companyId = id;
      this.addressId = address.id;

      if (id) {
        this.companyForm.patchValue({ ...info, ...address });
      }
    });
  }
}
