import { createAction, props } from '@ngrx/store';
import { createActionType } from '../helpers/effects';
import IHotelForm from '../models/hotel/IHotelForm.model';

const CREATE_HOTEL = createActionType('[HOTEL CREATE] setAll');
const UPLOAD_IMAGES = createActionType('[HOTEL UPLOAD IMAGES] setAll');
const GET_ALL = createActionType('[HOTEL GET ALL] setAll');

export const createHotel = {
  request: createAction(
    CREATE_HOTEL.REQUEST,
    props<{ hotelForm: IHotelForm; images: File[] }>()
  ),
  success: createAction(
    CREATE_HOTEL.SUCCESS,
    props<{ id: number; images: FormData[] }>()
  ),
  failure: createAction(CREATE_HOTEL.FAILURE),
};

export const uploadImages = {
  request: createAction(
    UPLOAD_IMAGES.REQUEST,
    props<{ hotelId: number; image: FormData }>()
  ),
  success: createAction(UPLOAD_IMAGES.SUCCESS),
  failure: createAction(UPLOAD_IMAGES.FAILURE),
};

export const getAll = {
  request: createAction(GET_ALL.REQUEST),
  success: createAction(GET_ALL.SUCCESS, props<{ hotels: IHotel[] }>()),
  failure: createAction(GET_ALL.FAILURE),
};

export const HotelActions = {
  createHotel,
  uploadImages,
  getAll,
};
