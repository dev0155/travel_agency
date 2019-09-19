import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { setAllLogin } from 'src/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<number>) {}

  ngOnInit() {
    this.createdForm();
  }

  createdForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      rememberMe: [''],
    });
  }

  logIn(): void {
    const data = this.loginForm.value;
    const user = { email: data.email, password: data.password };
    this.store.dispatch(
      setAllLogin.request({ user, rememberMe: data.rememberMe })
    );
  }

  isValid(name: string): boolean {
    return (
      this.loginForm.controls[name].touched &&
      this.loginForm.controls[name].invalid
    );
  }
}
