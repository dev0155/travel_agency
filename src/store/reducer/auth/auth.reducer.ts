import { Action, createReducer, on } from '@ngrx/store';
import { RegisterSuccess } from 'src/store/actions/auth.actions';

export const initialState = 0;

const _registerReducer = createReducer(
  initialState,
  on(RegisterSuccess, (state: number, action) => action.id)
);

export function registerReducer(state: number, action: Action) {
  return _registerReducer(state, action);
}
