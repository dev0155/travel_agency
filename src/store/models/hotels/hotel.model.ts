export default interface IHotel {
  name: string;
  phone: string;
  description: string;

  address?: {
    country?: string;
    city?: string;
    state?: string;
    street?: string;
    location?: {
      lat?: number;
      lng?: number;
    };
  };
}
