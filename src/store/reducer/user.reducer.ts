import { Action, createReducer, on } from '@ngrx/store';
import { UsersActions } from 'src/store/actions/users.actions';

export interface IUserState {
  email: string;
  firstName: string;
  lastName: string;
}
const initState = (): IUserState => ({
  email: null,
  firstName: null,
  lastName: null,
});

const userReducer = createReducer(
  initState(),
  on(UsersActions.getById.request, (state) => ({
    ...state,
    email: null,
    firstName: null,
    lastName: null,
  })),
  on(UsersActions.getById.success, (state, { user }) => ({
    ...state,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  })),
  on(UsersActions.getById.failure, (state) => ({
    ...state,
    email: null,
    firstName: null,
    lastName: null,
  })),
  on(UsersActions.updateInfo.request, (state) => ({ ...state })),
  on(UsersActions.updateInfo.success, (state, action) => ({
    ...state,
    email: action.info.email,
    firstName: action.info.firstName,
    lastName: action.info.lastName,
  })),
  on(UsersActions.updateInfo.failure, (state) => ({
    ...state,
  }))
);

export function reducer(state: IUserState | undefined, action: Action) {
  return userReducer(state, action);
}
