import ICompany from 'src/store/models/ICompany.model';
import IUploadedImg from 'src/store/models/hotel/IUploadedImg.model';

export interface IHotel {
  id: number;
  name: string;
  address: {
    country: string;
    city: string;
    state: string;
    street: string;
    location?: {
      latitude: string;
      longtitude: string;
    };
  };
  description: string;
  phone: string;
  averageRating: number;
  images: IUploadedImg[];
  company?: ICompany;
}
