import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UserToLogIn } from 'src/store/models/auth/authUser';
import { Login } from 'src/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public login$: Observable<number>;
  public id$ = this.store.pipe(select('register'));

  constructor(private fb: FormBuilder, private store: Store<number>) {}

  ngOnInit() {
    this.createdForm();
  }

  createdForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  logIn() {
    const user: UserToLogIn = { ...this.loginForm.value };
    this.store.dispatch(Login({ user: user }));
    setTimeout(() => this.loginForm.reset(), 3000);
  }
}
