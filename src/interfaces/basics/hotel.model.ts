import ICompany from 'src/store/models/ICompany.model';

export interface IHotel {
  id: number;
  name: string;
  address: {
    country: string;
    city: string;
    state: string;
    street: string;
    location: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  phone: string;
  averageRating: string;
  images: string[];
  company: ICompany; // admin company that create new hotel;
}
