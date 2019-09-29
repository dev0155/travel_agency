import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import IUser from '../models/IUser.model';

const GET_BY_ID = createActionType('[USER GET BY ID] setAll');
const UPDATE_INFO = createActionType('[USER UPDATE INFO] setAll');
const UPDATE_PASSWORD = createActionType('[USER UPDATE PASSWORD] setAll');
const GET_CURRENT_ID = createActionType('[USER GET CURRENT ID] setAll');

const getCurrentId = {
  request: createAction(GET_CURRENT_ID.REQUEST),
  // success: createAction(GET_CURRENT_ID.SUCCESS, props<{ id: number }>()),
  // failure: createAction(GET_CURRENT_ID.FAILURE),
};

const getById = {
  request: createAction(GET_BY_ID.REQUEST, props<{ id: number }>()),
  success: createAction(GET_BY_ID.SUCCESS, props<{ user: IUser }>()),
  failure: createAction(GET_BY_ID.FAILURE),
};

const updateInfo = {
  request: createAction(UPDATE_INFO.REQUEST, props<{ info: IUser }>()),
  success: createAction(UPDATE_INFO.SUCCESS, props<{ info: IUser }>()),
  failure: createAction(UPDATE_INFO.FAILURE),
};

const updatePassword = {
  request: createAction(UPDATE_PASSWORD.REQUEST, props<{ password: string }>()),
  success: createAction(UPDATE_PASSWORD.SUCCESS),
  failure: createAction(UPDATE_PASSWORD.FAILURE),
};

export const UsersActions = {
  getById,
  updateInfo,
  updatePassword,
  getCurrentId,
};
