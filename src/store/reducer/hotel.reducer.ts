import { Action, createReducer, on } from '@ngrx/store';
import { HotelActions } from '../actions/hotel.actions';

export interface IHotelState {
  loadedImgCounter: number;
}

const initState = (): IHotelState => ({
  loadedImgCounter: null,
});

const hotelReducer = createReducer(
  initState(),
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
  }))
);

export function reducer(state: IHotelState | undefined, action: Action) {
  return hotelReducer(state, action);
}
