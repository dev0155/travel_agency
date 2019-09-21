import { Action, createReducer, on } from '@ngrx/store';
import { setAllAccountUser } from 'src/store/actions/account/accountUser.actions';

export interface IAccountUserState {
  email: string;
  firstName: string;
  lastName: string;
}
const initState = (): IAccountUserState => ({
  email: null,
  firstName: null,
  lastName: null,
});

const accountUserReducer = createReducer(
  initState(),
  on(setAllAccountUser.request, (state) => ({
    ...state,
    email: null,
    firstName: null,
    lastName: null,
  })),
  on(setAllAccountUser.success, (state, { user }) => ({
    ...state,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  })),
  on(setAllAccountUser.failure, (state) => ({
    ...state,
    email: null,
    firstName: null,
    lastName: null,
  }))
);

export function reducer(state: IAccountUserState | undefined, action: Action) {
  return accountUserReducer(state, action);
}
