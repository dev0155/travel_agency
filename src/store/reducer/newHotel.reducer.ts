import { Action, createReducer, on } from '@ngrx/store';
import {
  setAllHotelForm,
  setAllHotelImages,
} from '../actions/newHotel.actions';

export interface INewHotelState {
  id: number;
  loading: boolean;
}

const initState = (): INewHotelState => ({ id: null, loading: null });

const newHotelReducer = createReducer(
  initState(),
  on(setAllHotelForm.request, (state) => ({
    ...state,
    loading: true,
  })),
  on(setAllHotelForm.success, (state, action) => ({
    ...state,
    id: action.id,
    loading: false,
  })),
  on(setAllHotelForm.failure, (state) => ({
    ...state,
    id: null,
    loading: false,
  }))

  // on(setAllHotelImages.request, (state) => ({ ...state, id: null, loading: true })),
  // on(setAllHotelImages.success, (state, action) => ({
  //   ...state,
  //   id: action.id,
  //   loading: false,
  // })),
  // on(setAllHotelImages.failure, (state) => ({ ...state, id: null, loading: false }))
);

export function reducer(state: INewHotelState | undefined, action: Action) {
  return newHotelReducer(state, action);
}
