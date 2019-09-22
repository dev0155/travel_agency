import { Component, OnInit, Input } from '@angular/core';

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
