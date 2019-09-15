import { Component, OnInit } from '@angular/core';
import { IUploadImg } from 'src/interfaces/custom/upload-img.models';

@Component({
  selector: 'hotel-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss'],
})
export class UploadHotelImgComponent implements OnInit {
  public images: IUploadImg[] = [];

  constructor() {}

  ngOnInit() {}

  public upload = (images: File[]) => {
    if (images.length === 0) return;

    for (let item of images) {
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
}
