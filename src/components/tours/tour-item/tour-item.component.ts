import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ITour } from 'src/interfaces/basics/tour.model';
import { IHotel } from 'src/interfaces/basics/hotel.model';
import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store';
import { ToursActions } from 'src/store/actions/tours.actions';

@Component({
  selector: 'tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.scss'],
})
export class TourItemComponent implements OnInit, OnChanges {
  @Input() tour = {} as ITour;
  public hotel: IHotel;
  public imgPath: string;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.hotel = this.tour.hotel;
    this.imgPath = this.hotel.images[0]
      ? `http://localhost:3000/${this.hotel.images[0].image}`
      : '../../../assets/img/no-image.png';
  }

  public get duration(): number {
    if (this.tour) {
      const start = new Date(`${this.tour.startDate}`);
      const end = new Date(`${this.tour.endDate}`);
      return Math.abs(end.getDate() - start.getDate());
    }
  }

  public viewDetails(): void {
    this.router.navigateByUrl(`tours/${this.tour.id}`);
  }

  public get minPrice(): number {
    return this.tour.rooms.reduce(
      (min, next) => (next.price < min ? next.price : min),
      this.tour.rooms[0].price
    );
  }
}
