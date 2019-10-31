import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { API_URL } from 'src/endpoints';
import { IHotelResponse } from 'src/store/models/hotel/IHttpHotels.model';
import { Router } from '@angular/router';

@Component({
  selector: 'hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss'],
})
export class HotelItemComponent implements OnInit, OnChanges {
  @Input() hotel = {} as IHotelResponse;
  public imgPath: string;
  public rating: number;

  constructor(private router: Router) {
    this.rating = this.randomRating;
  }

  ngOnInit() {}

  ngOnChanges(): void {
    this.imgPath = this.hotel.images[0]
      ? `${API_URL}/${this.hotel.images[0].image}`
      : '../../../assets/img/no-image.png';
  }

  public viewDetails(): void {
    this.router.navigate(['hotels', this.hotel.id, 'detail']);
  }

  private get randomRating(): number {
    return Math.floor(Math.random() * 10);
  }
}
