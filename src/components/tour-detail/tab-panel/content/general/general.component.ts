import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IHotel } from 'src/interfaces/basics/hotel.model';
import { ITour } from 'src/interfaces/basics/tour.model';
import { API_URL } from 'src/endpoints';

@Component({
  selector: 'td-general-tab',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit, OnChanges {
  @Input() tour = {} as ITour;
  public hotel: IHotel;
  public rating: number;

  constructor() {
    this.randomRating();
  }

  ngOnInit() {}

  ngOnChanges() {
    this.hotel = this.tour.hotel;
  }

  public randomRating(): void {
    this.rating = Math.floor(Math.random() * 10);
  }
}
