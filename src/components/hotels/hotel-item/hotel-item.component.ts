import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from 'src/interfaces/basics/hotel.model';

@Component({
  selector: 'hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss'],
})
export class HotelItemComponent implements OnInit {
  @Input() hotel = {} as IHotel;
  constructor() {}

  ngOnInit() {}

  viewDetails() {
    //code
  }
}
