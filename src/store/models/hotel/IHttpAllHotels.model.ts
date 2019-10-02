import { IHotel } from 'src/interfaces/basics/hotel.model';

export interface IHttpAllHotels {
  items: IHotel[];
  itemsCount: number;
  total: number;
  page: number;
  maxPage: number;
}
