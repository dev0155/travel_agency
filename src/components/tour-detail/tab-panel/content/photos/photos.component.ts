import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'td-photos-tab',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  @Input() images;

  constructor() {}

  ngOnInit() {}
}
