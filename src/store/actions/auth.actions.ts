import { createAction, props } from '@ngrx/store';
import RegisteredUser from '../models/auth/registerUser';

export enum AuthActionTypes {
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
}

export const Register = createAction(
  AuthActionTypes.Register,
  props<{ user: RegisteredUser }>()
);

export const RegisterSuccess = createAction(
  AuthActionTypes.RegisterSuccess,
  props<{ id: number }>()
);
