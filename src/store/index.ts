import * as fromAuth from 'src/store/reducer/auth.reducer';
import * as fromNewHotel from './reducer/newHotel.reducer';

export class AppState {
  auth: fromAuth.IAuthState;
  newHotel: fromNewHotel.INewHotelState;
}

const store = {
  auth: fromAuth.reducer,
  newHotel: fromNewHotel.reducer,
};

export default store;
