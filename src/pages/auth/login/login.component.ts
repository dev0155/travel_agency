import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setAllLogin } from 'src/store/actions/auth.actions';
import { AppState } from 'src/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showPassword = false;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.createdForm();
  }

  private createdForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      rememberMe: [''],
    });
  }

  public logIn(): void {
    const data = this.loginForm.value;
    const user = { email: data.email, password: data.password };
    this.store.dispatch(
      setAllLogin.request({ user, rememberMe: data.rememberMe })
    );
  }

  public isValid(name: string): boolean {
    return (
      this.loginForm.controls[name].touched &&
      this.loginForm.controls[name].invalid
    );
  }

  public get passwordIcon() {
    return !this.showPassword
      ? '../../../assets/img/show.svg'
      : '../../../assets/img/hide.svg';
  }

  public displayPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
