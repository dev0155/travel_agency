import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToursService } from 'src/services/tours.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  public hotel: IHotel = {} as IHotel;
  constructor(private tourService: ToursService) {}

  ngOnInit() {
    this.tourService
      .getTours()
      .subscribe((res: ITour[]) => (this.hotel = res[0].hotel));
  }
}
