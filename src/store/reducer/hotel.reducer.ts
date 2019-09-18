import { createReducer, on, State, Action } from '@ngrx/store';
import { CreateSuccess, CreateFailed } from '../actions/hotels.actions';
import { HotelStore } from '../models/hotels/hotelStore';

export const initialState: HotelStore = {
  id: null,
  error: null,
};

const hotelReducer = createReducer(
  initialState,
  on(CreateSuccess, (state, { id }) => ({
    ...state,
    id: id,
    error: null,
  })),
  on(CreateFailed, (state, { error }) => ({
    id: null,
    error: error,
  }))
);

export function HotelReducer(state: HotelStore | undefined, action: Action) {
  return hotelReducer(state, action);
}
