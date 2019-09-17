import { createAction, props } from '@ngrx/store';
import { UserToRegister, UserToLogIn } from 'src/store/models/auth/authUser';
import RegisterStore from '../models/auth/registerStore';

export enum AuthActionTypes {
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterFailed = '[Auth] Register Failed',
  RegisterUserExist = '[Auth] Register User Exist',

  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailed = '[Auth] Login Failed',
}

//
// *** REGISTER ***
export const Register = createAction(
  AuthActionTypes.Register,
  props<{ user: UserToRegister }>()
);

export const RegisterSuccess = createAction(
  AuthActionTypes.RegisterSuccess,
  props<{ id: number }>()
);

export const RegisterFailed = createAction(
  AuthActionTypes.RegisterFailed,
  props<{ errorCode: number }>()
);

//
// *** LOGIN ***
export const Login = createAction(
  AuthActionTypes.Login,
  props<{ user: UserToLogIn }>()
);

export const LoginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ id: number }>()
);

export const LoginFailed = createAction(AuthActionTypes.LoginFailed);
