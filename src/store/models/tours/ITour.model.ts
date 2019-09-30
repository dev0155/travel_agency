import { ITour } from 'src/interfaces/basics/tour.model';

export interface IHttpTour {
  startDate: Date;
  endDate: Date;
  description: string;
  rooms: IService[];
  services: IRoom[];
  hotelId: number;
}

export interface IService {
  id: number;
  service: string;
}

export interface IRoom {
  id?: number;
  price: number;
  roomType: string;
  tourId?: number;
}

export interface IHttpAllTours {
  items: ITour[];
  itemsCount: number;
  total: number;
  page: number;
  maxPage: number;
}
