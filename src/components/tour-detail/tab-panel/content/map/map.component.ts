import { Component, OnInit, Input } from '@angular/core';
import ILocation from 'src/store/models/ILocation.model';

@Component({
  selector: 'td-map-tab',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() location: ILocation;
  public lat: number;
  public lng: number;

  constructor() {}

  ngOnInit() {
    this.lat = +this.location.latitude;
    this.lng = +this.location.longtitude;
  }
}
