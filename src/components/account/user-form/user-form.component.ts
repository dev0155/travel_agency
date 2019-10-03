import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/store';
import { UsersActions } from 'src/store/actions/users.actions';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.createForm();
    this.fillForm();
  }

  createForm(): void {
    this.userForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(5)],
      firstName: ['', Validators.pattern('[a-zA-Z ]*')],
      lastName: ['', Validators.pattern('[a-zA-Z ]*')],
    });
  }

  isValid(name: string): boolean {
    return this.userForm.get(name).touched && this.userForm.get(name).invalid;
  }

  fillForm(): void {
    this.store
      .pipe(select('users'))
      .subscribe((info) => this.userForm.patchValue({ ...info }));
  }

  saveUser(): void {
    this.updateInfo();
    this.updatePassword();
    this.userForm.get('password').setValue('');
  }

  // defaultClear(controlName: string): void {
  //   if (!this.userForm.get(controlName).dirty) {
  //     this.userForm.get(controlName).setValue('');
  //   }
  // }

  private updateInfo(): void {
    const { password, ...info } = this.userForm.value;
    this.store.dispatch(UsersActions.updateInfo.request({ info }));
  }

  private updatePassword(): void {
    const password: string = this.userForm.get('password').value;
    if (password !== '') {
      this.store.dispatch(UsersActions.updatePassword.request({ password }));
    }
  }
}
