import { Component, OnInit, Input } from '@angular/core';
import { ITour } from 'src/interfaces/basics/tour.model';
import { IHotel } from 'src/interfaces/basics/hotel.model';
import { API_URL } from 'src/endpoints';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() tour: ITour;
  public hotel: IHotel;
  public imgPath: string;

  currency = ['EUR', 'UAH', 'USD'];
  currentCurrency = 'USD';

  constructor() {}

  ngOnInit() {
    this.hotel = this.tour.hotel;
    this.imgPath = this.hotel.images[0]
      ? `${API_URL}/${this.hotel.images[0].image}`
      : '../../../assets/img/no-image.png';
  }

  public changeCurrency(changedCurrency: string) {
    this.currentCurrency = changedCurrency;
  }

  public get duration(): number {
    const start = new Date(`${this.tour.startDate}`);
    const end = new Date(`${this.tour.endDate}`);
    return Math.ceil(
      Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  public get minPrice(): number {
    return this.tour.rooms.reduce(
      (min, next) => (next.price < min ? next.price : min),
      this.tour.rooms[0].price
    );
  }

  public convert(price: number) {
    let convertedPrice = 0;
    switch (this.currentCurrency) {
      case 'EUR': {
        convertedPrice = price / 1.096;
        break;
      }
      case 'UAH': {
        convertedPrice = price * 25.3;
        break;
      }
      default: {
        convertedPrice = price;
      }
    }
    return convertedPrice;
  }
}
