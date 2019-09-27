import ILocation from './ILocation.model';

export default interface IAddress {
  id: number;
  country: string;
  city: string;
  street: string;
  state: string;
  address1: string;
  address2?: string;
  zip: string;
  location: ILocation;
}
