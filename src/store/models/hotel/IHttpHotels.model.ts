import { IHotel } from 'src/interfaces/basics/hotel.model';
import IAddress from '../IAddress.model';
import IUploadedImg from './IUploadedImg.model';
import ICompany from '../ICompany.model';

export interface IHttpAllHotels {
  items: IHotelResponse[];
  itemsCount: number;
  total: number;
  page: number;
  maxPage: number;
}
export interface IHotelForm {
  name: string;
  phone: string;
  description: string;
  address: IAddress;
}

export interface IHotelResponse {
  id: number;
  name: string;
  description: string;
  phone: string;
  averageRating: string;
  companyId: number;
  addressId: number;
  images: IUploadedImg[];
  company: ICompany;
  address: IAddress;
}
