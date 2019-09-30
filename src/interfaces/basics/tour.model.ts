import { IHotel } from './hotel.model';
import { IRoom, IService } from 'src/store/models/tours/ITour.model';

export interface ITour {
  id: number;
  hotel: IHotel;
  rooms: IRoom[];
  services: IService[];
  startDate: Date;
  endDate: Date;
  description: string;
}
