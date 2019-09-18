import * as fromNewHotel from './reducer/newHotelPage.reducer';

export class AppState {
  newHotel: fromNewHotel.IHotelState;
}
const store = {
  newHotel: fromNewHotel.reducer,
};
export default store;
