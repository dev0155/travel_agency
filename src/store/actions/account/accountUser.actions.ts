import { createAction, props } from '@ngrx/store';
import { createActionType } from '../../helpers/effects';
import { IUser } from '../../models/account/IUser';

const SET_ALL_ACCOUNT_USER = createActionType('[ACCOUNT USER] setAll');

export const setAllAccountUser = {
  request: createAction(
    SET_ALL_ACCOUNT_USER.REQUEST,
    props<{ id: number; user: IUser }>()
  ),
  success: createAction(SET_ALL_ACCOUNT_USER.SUCCESS, props<{ user: IUser }>()),
  failure: createAction(SET_ALL_ACCOUNT_USER.FAILURE),
};
