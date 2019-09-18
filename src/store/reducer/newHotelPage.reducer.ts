import { Action, createReducer, on } from '@ngrx/store';
import { setAllHotelInfo, setAllHotelImages } from '../actions/hotel.actions';

export interface IHotelState {
  loading: boolean;
}

const initState = (): IHotelState => ({ loading: null });

const newHotelReducer = createReducer(
  initState(),
  on(setAllHotelInfo.request, (state) => ({ ...state, loading: true })),
  on(setAllHotelInfo.success, (state) => ({ ...state, loading: false })),
  on(setAllHotelInfo.failure, (state) => ({ ...state, loading: false })),

  on(setAllHotelImages.request, (state) => ({ ...state, loading: true })),
  on(setAllHotelImages.success, (state) => ({ ...state, loading: false })),
  on(setAllHotelImages.failure, (state) => ({ ...state, loading: false }))
);

export function reducer(state: IHotelState | undefined, action: Action) {
  return newHotelReducer(state, action);
}
