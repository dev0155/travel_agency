import * as fromAuth from 'src/store/reducer/auth.reducer';
import * as fromHotel from './reducer/hotel.reducer';
import * as fromCompany from './reducer/company.reducer';
import * as fromUsers from './reducer/user.reducer';
import * as fromTours from './reducer/tours.reducer';

export class AppState {
  auth: fromAuth.IAuthState;
  company: fromCompany.ICompanyState;
  users: fromUsers.IUserState;
  hotel: fromHotel.IHotelState;
  tours: fromTours.IToursState;
}

const store = {
  auth: fromAuth.reducer,
  hotel: fromHotel.reducer,
  company: fromCompany.reducer,
  users: fromUsers.reducer,
  tours: fromTours.reducer,
};

export default store;
