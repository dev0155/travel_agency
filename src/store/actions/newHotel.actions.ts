import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import INewHotelForm from '../models/hotel/INewHotelForm';

const SET_ALL_HOTEL_FORM = createActionType('[HOTEL FORM] setAll');
const SET_ALL_HOTEL_IMAGES = createActionType('[HOTEL IMAGES] setAll');

export const setAllHotelForm = {
  request: createAction(
    SET_ALL_HOTEL_FORM.REQUEST,
    props<{ hotelForm: INewHotelForm; images: File[] }>()
  ),
  success: createAction(
    SET_ALL_HOTEL_FORM.SUCCESS,
    props<{ id: number; images: FormData[] }>()
  ),
  failure: createAction(SET_ALL_HOTEL_FORM.FAILURE),
};

export const setAllHotelImages = {
  request: createAction(
    SET_ALL_HOTEL_IMAGES.REQUEST,
    props<{ hotelId: number; image: FormData }>()
  ),
  success: createAction(SET_ALL_HOTEL_IMAGES.SUCCESS),
  failure: createAction(SET_ALL_HOTEL_IMAGES.FAILURE),
};
