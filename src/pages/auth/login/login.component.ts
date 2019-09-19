import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public id$: Observable<number>;
  // public id$ = this.store.pipe(select('register'));

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
    // const user = { ...this.loginForm.value };
    // this.store.dispatch(Login({ user: user }));
  }
}
