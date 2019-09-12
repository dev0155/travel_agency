import { Action, createReducer, on } from '@ngrx/store';
import {
  RegisterSuccess,
  RegisterFailed,
} from 'src/store/actions/auth.actions';
import RegisterStore from 'src/store/models/auth/registerStore';

export const initialState: RegisterStore = {
  id: 0,
  errorMessage: null,
};

const registerReducer = createReducer(
  initialState,
  on(RegisterSuccess, (state, { id }) => ({ ...state, id: id })),
  on(RegisterFailed, (state, action) => ({
    id: 0,
    errorMessage: action.errorMessage,
  }))
);

export function reducer(state: RegisterStore | undefined, action: Action) {
  return registerReducer(state, action);
}
