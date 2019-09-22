import IAddress from './IAddress.model';

export default interface ICompany {
  id?: number;
  contactEmail: string;
  name: string;
  address: IAddress;
}
