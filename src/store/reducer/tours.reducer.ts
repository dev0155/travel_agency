import { Action, createReducer, on } from '@ngrx/store';
import { ITourService } from '../models/tours/ITourService.model';
import { ToursActions } from '../actions/tours.actions';

export interface IToursState {
  services: ITourService[];
}

const initState = (): IToursState => ({
  services: null,
});

const toursReducer = createReducer(
  initState(),
  on(ToursActions.getServices.request, (state) => ({
    ...state,
    services: null,
  })),
  on(ToursActions.getServices.success, (state, { services }) => ({
    ...state,
    services,
  })),
  on(ToursActions.getServices.failure, (state) => ({
    ...state,
    services: null,
  }))
);

export function reducer(state: IToursState | undefined, action: Action) {
  return toursReducer(state, action);
}
