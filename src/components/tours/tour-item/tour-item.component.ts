import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ITour } from 'src/interfaces/basics/tour.model';
import { IHotel } from 'src/interfaces/basics/hotel.model';
import { Router } from '@angular/router';
import { API_URL } from 'src/endpoints';

@Component({
  selector: 'tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.scss'],
})
export class TourItemComponent implements OnInit, OnChanges {
  @Input() tour = {} as ITour;
  public hotel: IHotel;
  public imgPath: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.hotel = this.tour.hotel;
    this.imgPath = this.hotel.images[0]
      ? `${API_URL}/${this.hotel.images[0].image}`
      : '../../../assets/img/no-image.png';
  }

  public get duration(): number {
    if (this.tour) {
      const start = new Date(`${this.tour.startDate}`);
      const end = new Date(`${this.tour.endDate}`);
      return Math.ceil(
        Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
    }
  }

  public viewDetails(): void {
    this.router.navigate(['tours', this.tour.id, 'detail']);
  }

  public get minPrice(): number {
    return this.tour.rooms.reduce(
      (min, next) => (next.price < min ? next.price : min),
      this.tour.rooms[0].price
    );
  }
}
