import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import { IHttpTour, IService } from '../models/tours/ITour.model';
import { ITour } from 'src/interfaces/basics/tour.model';
import IPaginator from 'src/interfaces/custom/IPaginator.model';

const CREATE_TOUR = createActionType('[TOUR CREATE] setAll');
const GET_ALL_TOURS = createActionType('[TOUR GET ALL] setAll');
const GET_BY_ID = createActionType('[TOUR GET BY ID] setAll');
const GET_SERVICES = createActionType('[TOUR GET SERVICES] setAll');
const SEARCH = createActionType('[TOUR SEARCH] setAll');

export const create = {
  request: createAction(CREATE_TOUR.REQUEST, props<{ tour: IHttpTour }>()),
  success: createAction(CREATE_TOUR.SUCCESS),
  failure: createAction(CREATE_TOUR.FAILURE),
};

export const getById = {
  request: createAction(GET_BY_ID.REQUEST, props<{ id: number }>()),
  success: createAction(GET_BY_ID.SUCCESS, props<{ item: ITour }>()),
  failure: createAction(GET_BY_ID.FAILURE),
};

export const getAll = {
  request: createAction(
    GET_ALL_TOURS.REQUEST,
    props<{ params: { limit: number; page: number } }>()
  ),
  success: createAction(
    GET_ALL_TOURS.SUCCESS,
    props<{ items: ITour[]; paginator: IPaginator }>()
  ),
  failure: createAction(GET_ALL_TOURS.FAILURE),
};

export const getServices = {
  request: createAction(GET_SERVICES.REQUEST),
  success: createAction(
    GET_SERVICES.SUCCESS,
    props<{ services: IService[] }>()
  ),
  failure: createAction(GET_SERVICES.FAILURE),
};

export const search = {
  request: createAction(SEARCH.REQUEST, props<{ target: string }>()),
  success: createAction(SEARCH.SUCCESS, props<{ items: ITour[] }>()),
  failure: createAction(SEARCH.FAILURE),
};

export const ToursActions = {
  create,
  getAll,
  getServices,
  search,
  getById,
};
