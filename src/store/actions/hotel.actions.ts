import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import IError from '../helpers/IError';

const SET_ALL_HOTEL_INFO = createActionType('[HOTEL INFO] setAll');
const SET_ALL_HOTEL_IMAGES = createActionType('[HOTEL IMAGE] setAll');

export const setAllHotelInfo = {
  request: createAction(
    SET_ALL_HOTEL_INFO.REQUEST,
    props<{ hotel: IHotel; images: File[] }>()
  ),
  success: createAction(SET_ALL_HOTEL_INFO.SUCCESS),
  // , props<{ id: number }>()
  failure: createAction(SET_ALL_HOTEL_INFO.FAILURE, props<{ error: IError }>()),
};

export const setAllHotelImages = {
  request: createAction(
    SET_ALL_HOTEL_IMAGES.REQUEST,
    props<{ image: FormData }>()
  ),
  success: createAction(SET_ALL_HOTEL_IMAGES.SUCCESS),
  failure: createAction(
    SET_ALL_HOTEL_IMAGES.FAILURE,
    props<{ error: IError }>()
  ),
};
