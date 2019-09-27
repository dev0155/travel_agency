import IAddress from '../IAddress.model';

export default interface IHotelForm {
  name: string;
  phone: string;
  description: string;
  address: IAddress;
}
