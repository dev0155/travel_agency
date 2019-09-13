import { Action, createReducer, on } from '@ngrx/store';
import {
  RegisterSuccess,
  RegisterFailed,
  LoginSuccess,
} from 'src/store/actions/auth.actions';
import RegisterStore from 'src/store/models/auth/registerStore';

export const initialState: RegisterStore = {
  id: 0,
  errorMessage: null,
};

const authReducer = createReducer(
  initialState,
  on(RegisterSuccess, (state, { id }) => ({ ...state, id: id })),
  on(RegisterFailed, (state) => ({
    id: 0,
  })),
  on(LoginSuccess, (state, { id }) => ({ ...state, id: id }))
);

export function reducer(state: RegisterStore | undefined, action: Action) {
  return authReducer(state, action);
}
