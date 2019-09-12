import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/components/common/must-match/must-match.validator';
import { Store, select } from '@ngrx/store';
import { Register } from 'src/store/actions/auth.actions';

import RegisteredUser from 'src/store/models/auth/registerUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  id$ = this.store.pipe(select('id'));

  constructor(private fb: FormBuilder, private store: Store<{ id: number }>) {}

  ngOnInit() {
    this.createdForm();
  }

  register() {
    const newInfo: RegisteredUser = {
      role: 'ADMIN',
      ...this.registerForm.value,
    };
    this.store.dispatch(Register({ user: newInfo }));
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
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        confirmPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
}
