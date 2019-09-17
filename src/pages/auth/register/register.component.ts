import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/components/common/must-match/must-match.validator';
import { Store, select } from '@ngrx/store';
import { Register } from 'src/store/actions/auth.actions';
import { Observable } from 'rxjs';
import RegisterStore from 'src/store/models/auth/registerStore';
import { UserToRegister } from 'src/store/models/auth/authUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public register$: Observable<RegisterStore>;

  constructor(
    private fb: FormBuilder,
    private store: Store<RegisterStore>,
    private router: Router
  ) {
    this.register$ = store.pipe(select('register'));
  }

  ngOnInit() {
    this.createdForm();

    this.register$.subscribe(({ isUserCreated, errorCode }) => {
      if (isUserCreated === false && errorCode === 400) {
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 3000);
      }
    });
  }

  register() {
    const newInfo: UserToRegister = {
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
