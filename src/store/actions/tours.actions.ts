import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import { ITourService } from '../models/tours/ITourService.model';

const CREATE_TOUR = createActionType('[TOUR CREATE] setAll');
const GET_ALL_TOURS = createActionType('[TOUR GET ALL] setAll');
const GET_SERVICES = createActionType('[TOUR GET SERVICES] setAll');

export const create = {
  request: createAction(CREATE_TOUR.REQUEST, props<{ tour; images: File[] }>()),
  success: createAction(
    CREATE_TOUR.SUCCESS,
    props<{ id: number; images: FormData[] }>()
  ),
  failure: createAction(CREATE_TOUR.FAILURE),
};

export const getAll = {
  request: createAction(GET_ALL_TOURS.REQUEST),
  success: createAction(GET_ALL_TOURS.SUCCESS),
  failure: createAction(GET_ALL_TOURS.FAILURE),
};

export const getServices = {
  request: createAction(GET_SERVICES.REQUEST),
  success: createAction(
    GET_SERVICES.SUCCESS,
    props<{ services: ITourService[] }>()
  ),
  failure: createAction(GET_SERVICES.FAILURE),
};

export const ToursActions = {
  create,
  getAll,
  getServices,
};
