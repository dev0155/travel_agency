import { HotelError } from './hotelError';

export interface HotelStore {
  id: number;
  error: HotelError;
}
