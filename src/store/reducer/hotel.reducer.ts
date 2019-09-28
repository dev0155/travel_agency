import { Action, createReducer, on } from '@ngrx/store';
import { HotelActions } from '../actions/hotel.actions';
import { IHotelResponse } from '../models/hotel/IHotelResponse.model';
import IAddress from '../models/IAddress.model';

export interface IHotelState {
  loadedImgCounter: number;
  hotels: IHotel[];
}

const initState = (): IHotelState => ({
  loadedImgCounter: null,
  hotels: null,
});

const hotelReducer = createReducer(
  initState(),
  // create
  on(HotelActions.createHotel.request, (state) => ({
    ...state,
    loadedImgCounter: null,
  })),
  on(HotelActions.createHotel.success, (state) => {
    return {
      ...state,
      loadedImgCounter: null,
    };
  }),
  on(HotelActions.createHotel.failure, (state) => ({
    ...state,
    loadedImgCounter: null,
  })),

  // upload images
  on(HotelActions.uploadImages.request, (state) => ({
    ...state,
  })),
  on(HotelActions.uploadImages.success, (state) => ({
    ...state,
    loadedImgCounter: state.loadedImgCounter + 1,
  })),
  on(HotelActions.uploadImages.failure, (state) => ({
    ...state,
    loadedImgCounter: null,
  })),

  // get all
  on(HotelActions.getAll.request, (state) => ({ ...state, hotels: null })),
  on(HotelActions.getAll.success, (state, { hotels }) => ({
    ...state,
    hotels,
  })),
  on(HotelActions.getAll.failure, (state) => ({ ...state, hotels: null }))
);

export function reducer(state: IHotelState | undefined, action: Action) {
  return hotelReducer(state, action);
}
