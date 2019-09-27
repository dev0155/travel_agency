export interface IHttpTour {
  startDate: Date;
  endDate: Date;
  description: string;
  rooms: IService[];
  services: IRoom[];
  hotelId: number;
}

export interface IService {
  id: number;
  service: string;
}

export interface IRoom {
  price: number;
  roomType: string;
}
