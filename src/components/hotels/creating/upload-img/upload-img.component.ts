import { Component, OnInit } from '@angular/core';
import IImage from 'src/interfaces/custom/image.model';

@Component({
  selector: 'hotel-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss'],
})
export class UploadHotelImgComponent implements OnInit {
  public images: IImage[] = [];

  constructor() {}

  ngOnInit() {}

  public upload = (images: File[]) => {
    if (images.length === 0) return;

    for (const item of images) {
      this.preview(item);
    }
  };

  private preview(data: File) {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = (_event) => {
      this.images.push({ img: data, url: reader.result });
    };
  }

  remove(index: number) {
    this.images.splice(index, 1);
  }
}
