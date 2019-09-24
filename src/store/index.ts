import * as fromAuth from 'src/store/reducer/auth.reducer';
import * as fromHotel from './reducer/hotel.reducer';

export class AppState {
  auth: fromAuth.IAuthState;
  hotel: fromHotel.IHotelState;
}

const store = {
  auth: fromAuth.reducer,
  hotel: fromHotel.reducer,
};

export default store;
