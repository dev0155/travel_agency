import { createAction, props } from '@ngrx/store';
import { HotelInfo } from '../models/hotels/hotelInfo';
import { HotelError } from '../models/hotels/hotelError';

export enum HotelActionTypes {
  Create = '[Hotel] Create',
  CreateSuccess = '[Hotel] Create Success',
  CreateFailed = '[Hotel] Create Failed',
}

export const Create = createAction(
  HotelActionTypes.Create,
  props<{ info: HotelInfo }>()
);

export const CreateSuccess = createAction(
  HotelActionTypes.CreateSuccess,
  props<{ id: number }>()
);

export const CreateFailed = createAction(
  HotelActionTypes.CreateFailed,
  props<{ error: HotelError }>()
);
