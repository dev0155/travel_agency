import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import IRegisterUser from '../models/auth/IRegisterUser';
import ILoginUser from '../models/auth/ILoginUser';
// import IError from '../helpers/IError';

const SET_ALL_REGISTER = createActionType('[AUTH REGISTER] setAll');
const SET_ALL_LOGIN = createActionType('[AUTH LOGIN] setAll');

export const setAllRegister = {
  request: createAction(
    SET_ALL_REGISTER.REQUEST,
    props<{ user: IRegisterUser }>()
  ),
  success: createAction(SET_ALL_REGISTER.SUCCESS, props<{ id: number }>()),
  failure: createAction(SET_ALL_REGISTER.FAILURE), //props<{ error: IError }>()
};

export const setAllLogin = {
  request: createAction(
    SET_ALL_LOGIN.REQUEST,
    props<{ user: ILoginUser; rememberMe: boolean }>()
  ),
  success: createAction(SET_ALL_LOGIN.SUCCESS, props<{ id: number }>()),
  failure: createAction(SET_ALL_LOGIN.FAILURE), //  props<{ error: IError }>()
};
