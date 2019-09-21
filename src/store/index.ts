import * as fromAuth from 'src/store/reducer/auth.reducer';
import * as fromNewHotel from './reducer/newHotel.reducer';
import * as fromAccountUser from './reducer/account/user.reducer';

export class AppState {
  auth: fromAuth.IAuthState;
  newHotel: fromNewHotel.INewHotelState;
  accountUser: fromAccountUser.IAccountUserState;
}

const store = {
  auth: fromAuth.reducer,
  newHotel: fromNewHotel.reducer,
  accountUser: fromAccountUser.reducer,
};

export default store;
