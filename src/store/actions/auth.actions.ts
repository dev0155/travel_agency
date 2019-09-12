import { createAction, props } from '@ngrx/store';
import RegisteredUser from '../models/auth/registerUser';

export enum AuthActionTypes {
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterFailed = '[Auth] Register Failed',
}

export const Register = createAction(
  AuthActionTypes.Register,
  props<{ user: RegisteredUser }>()
);

export const RegisterSuccess = createAction(
  AuthActionTypes.RegisterSuccess,
  props<{ id: number }>()
);

export const RegisterFailed = createAction(
  AuthActionTypes.RegisterFailed,
  props<{ errorMessage: string }>()
);
