import { Action, createReducer, on } from '@ngrx/store';
import { setAllRegister, setAllLogin } from '../actions/auth.actions';

export interface IAuthState {
  id: number;
  loading: boolean;
}

const initState = (): IAuthState => ({ id: null, loading: null });

const authReducer = createReducer(
  initState(),
  on(setAllRegister.request, (state) => ({
    ...state,
    id: null,
    loading: true,
  })),
  on(setAllRegister.success, (state, action) => ({
    ...state,
    id: action.id,
    loading: false,
  })),
  on(setAllRegister.failure, (state) => ({
    ...state,
    id: null,
    loading: false,
  })),

  on(setAllLogin.request, (state) => ({ ...state, id: null, loading: true })),
  on(setAllLogin.success, (state, action) => ({
    ...state,
    id: action.id,
    loading: false,
  })),
  on(setAllLogin.failure, (state) => ({ ...state, id: null, loading: false }))
);

export function reducer(state: IAuthState | undefined, action: Action) {
  return authReducer(state, action);
}
