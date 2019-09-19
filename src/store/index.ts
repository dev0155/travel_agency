import * as fromAuth from 'src/store/reducer/auth.reducer';

export class AppState {
  auth: fromAuth.IAuthState;
}
const store = {
  auth: fromAuth.reducer,
};
export default store;
