import { Component, OnInit, Input } from '@angular/core';
import { API_URL } from 'src/endpoints';

@Component({
  selector: 'td-photos-tab',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  @Input() images;
  public displayImages = [];

  constructor() {}

  ngOnInit() {
    let index = 0;
    this.images.map((data) => {
      const path = `${API_URL}/${data.image}`;
      this.displayImages.push({ path, index });
      index++;
    });
  }
}
