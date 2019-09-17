import { Action, createReducer, on } from '@ngrx/store';
import {
  RegisterSuccess,
  RegisterFailed,
  LoginSuccess,
} from 'src/store/actions/auth.actions';
import RegisterStore from 'src/store/models/auth/registerStore';

export const initialState: RegisterStore = {
  id: null,
  isUserCreated: null,
  errorCode: null,
};

const authReducer = createReducer(
  initialState,
  on(RegisterSuccess, (state, { id }) => ({
    isUserCreated: true,
    id: id,
  })),
  on(RegisterFailed, (state, { errorCode }) => ({
    id: null,
    isUserCreated: false,
    errorCode: errorCode,
  })),
  on(LoginSuccess, (state, { id }) => ({
    id: id,
    isUserCreated: null,
    errorCode: null,
  }))
);

export function reducer(state: RegisterStore | undefined, action: Action) {
  return authReducer(state, action);
}
