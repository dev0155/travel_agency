import { Action, createReducer, on } from '@ngrx/store';
import {
  setAllHotelForm,
  setAllHotelImages,
} from '../actions/newHotel.actions';

export interface INewHotelState {
  loadedImgCounter: number;
}

const initState = (): INewHotelState => ({
  loadedImgCounter: null,
});

const newHotelReducer = createReducer(
  initState(),
  on(setAllHotelForm.request, (state) => ({
    ...state,
    loadedImgCounter: null,
  })),
  on(setAllHotelForm.success, (state) => ({
    ...state,
    loadedImgCounter: null,
  })),
  on(setAllHotelForm.failure, (state) => ({
    ...state,
    loadedImgCounter: null,
  })),

  on(setAllHotelImages.request, (state) => ({
    ...state,
  })),
  on(setAllHotelImages.success, (state) => ({
    ...state,
    loadedImgCounter: state.loadedImgCounter + 1,
  })),
  on(setAllHotelImages.failure, (state) => ({
    ...state,
    loadedImgCounter: null,
  }))
);

export function reducer(state: INewHotelState | undefined, action: Action) {
  return newHotelReducer(state, action);
}
