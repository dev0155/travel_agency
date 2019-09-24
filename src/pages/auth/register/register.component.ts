import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import IRegisterUser from 'src/store/models/auth/IRegisterUser';
import { MustMatch } from 'src/components/common/must-match/must-match.validator';
import { setAllRegister } from 'src/store/actions/auth.actions';
import { AppState } from 'src/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.createdForm();
  }

  register() {
    const user: IRegisterUser = {
      firstName: this.getFormValue('firstName'),
      lastName: this.getFormValue('lastName'),
      email: this.getFormValue('email'),
      password: this.getFormValue('password'),
    };
    this.store.dispatch(setAllRegister.request({ user }));
  }

  createdForm() {
    this.registerForm = this.fb.group(
      {
        firstName: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
          ]),
        ],

        lastName: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
          ]),
        ],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(5)]),
        ],
        confirmPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(5)]),
        ],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  isValid(name: string): boolean {
    return (
      this.registerForm.controls[name].touched &&
      this.registerForm.controls[name].invalid
    );
  }

  private getFormValue(field: string): any {
    return this.registerForm.value[field];
  }
}
