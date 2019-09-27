import { IHotel } from './hotel.model';

export interface ITour {
  id: number;
  hotel: IHotel;
  price: number;
  roomType: 'Econom' | 'Lux' | 'Standard';
  services: ['Basic Hotel Service', 'Sport', 'Beach'];
  // a lot of services for tour (user can select admin can set one ore more services for tour)
  startDate: Date;
  endDate: Date;
  description: string;
}
