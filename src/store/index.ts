import * as fromAuth from 'src/store/reducer/auth.reducer';
import * as fromNewHotel from './reducer/newHotel.reducer';
import * as fromCompany from './reducer/company.reducer';
import * as fromUsers from './reducer/user.reducer';

export class AppState {
  auth: fromAuth.IAuthState;
  newHotel: fromNewHotel.INewHotelState;
  company: fromCompany.ICompanyState;
  users: fromUsers.IUserState;
}

const store = {
  auth: fromAuth.reducer,
  newHotel: fromNewHotel.reducer,
  company: fromCompany.reducer,
  users: fromUsers.reducer,
};

export default store;
