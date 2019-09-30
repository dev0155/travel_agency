import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from 'src/interfaces/basics/hotel.model';

@Component({
  selector: 'td-general-tab',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  @Input() hotel = {} as IHotel;
  public rating: number;

  constructor() {
    this.randomRating();
  }

  ngOnInit() {}

  public randomRating(): void {
    this.rating = Math.floor(Math.random() * 10);
  }
}
