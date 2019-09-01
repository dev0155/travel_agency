interface IHotel {
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
  rating: number;
  images: string[];
  company: ICompany; // admin company that create new hotel;
}
