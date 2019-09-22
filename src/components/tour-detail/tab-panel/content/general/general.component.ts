import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from 'src/interfaces/basics/hotel.model';

@Component({
  selector: 'td-general-tab',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  @Input() hotel = {} as IHotel;

  constructor() {}

  ngOnInit() {}
}
