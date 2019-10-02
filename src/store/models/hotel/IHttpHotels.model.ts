import { IHotel } from 'src/interfaces/basics/hotel.model';

export interface IHttpAllHotel {
  items: IHotel[];
  itemsCount: number;
  total: number;
  page: number;
  maxPage: number;
}
