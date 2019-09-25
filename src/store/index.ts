import * as fromAuth from 'src/store/reducer/auth.reducer';
import * as fromHotel from './reducer/hotel.reducer';
import * as fromTours from './reducer/tours.reducer';
export class AppState {
  auth: fromAuth.IAuthState;
  hotel: fromHotel.IHotelState;
  tours: fromTours.IToursState;
}

const store = {
  auth: fromAuth.reducer,
  hotel: fromHotel.reducer,
  tours: fromTours.reducer,
};

export default store;
