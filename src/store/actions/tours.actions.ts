import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import { ITourService } from '../models/tours/ITourService.model';
import { IHttpTour } from '../models/tours/ITour.model';
import IResponse from '../models/IResponse.model';

const CREATE_TOUR = createActionType('[TOUR CREATE] setAll');
const GET_ALL_TOURS = createActionType('[TOUR GET ALL] setAll');
const GET_SERVICES = createActionType('[TOUR GET SERVICES] setAll');

export const create = {
  request: createAction(CREATE_TOUR.REQUEST, props<{ tour: IHttpTour }>()),
  success: createAction(CREATE_TOUR.SUCCESS),
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
