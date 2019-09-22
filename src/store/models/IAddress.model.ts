export default interface IAddress {
  id: number;
  country: string;
  city: string;
  state: string;
  address1: string;
  address2?: string;
  zip: string;
  // add location
}
