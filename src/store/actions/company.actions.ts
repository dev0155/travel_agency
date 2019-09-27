import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import ICompany from '../models/ICompany.model';

const CREATE = createActionType('[COMPANY CREATE] setAll');
const UPDATE = createActionType('[COMPANY UPDATE] setAll');
const GET = createActionType('[COMPANY GET] setAll');
const GET_BY_USER = createActionType('[COMPANY GET BY USER] setAll');

const create = {
  request: createAction(CREATE.REQUEST, props<{ company: ICompany }>()),
  success: createAction(
    CREATE.SUCCESS,
    props<{ id: number; company: ICompany }>()
  ),
  failure: createAction(CREATE.FAILURE),
};

const update = {
  request: createAction(
    UPDATE.REQUEST,
    props<{ id: number; company: ICompany }>()
  ),
  success: createAction(UPDATE.SUCCESS, props<{ company: ICompany }>()),
  failure: createAction(UPDATE.FAILURE),
};

const getByOwnId = {
  request: createAction(GET.REQUEST, props<{ id: number }>()),
  success: createAction(GET.SUCCESS, props<{ company: ICompany }>()),
  failure: createAction(GET.FAILURE),
};

const getByUserId = {
  request: createAction(GET_BY_USER.REQUEST, props<{ id: number }>()),
  success: createAction(GET_BY_USER.SUCCESS, props<{ company: ICompany }>()),
  failure: createAction(GET_BY_USER.FAILURE),
};

export const CompanyActions = {
  create,
  update,
  getByOwnId,
  getByUserId,
};
