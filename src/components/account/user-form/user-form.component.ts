import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store';
import { setAllAccountUser } from 'src/store/actions/account/accountUser.actions';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;
  private id: number;

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.createForm();
    this.fillForm();
    this.actRoute.params.subscribe(({ id }) => (this.id = id));
  }

  createForm(): void {
    this.userForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      lastName: ['', Validators.required],
    });
  }

  isValid(name: string): boolean {
    return this.getControl(name).touched && this.getControl(name).invalid;
  }

  fillForm(): void {
    const user = this.actRoute.snapshot.data.userInfo;
    this.userForm.setValue({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: '',
    });
  }

  saveUser(): void {
    this.store.dispatch(
      setAllAccountUser.request({
        id: this.id,
        user: this.userForm.value,
      })
    );
  }

  getControl(controlName: string): AbstractControl {
    return this.userForm.get(controlName);
  }

  defaultClear(controlName: string): void {
    if (!this.getControl(controlName).dirty) {
      this.getControl(controlName).setValue('');
    }
  }
}
