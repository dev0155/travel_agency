import { Component, OnInit, ViewChild } from '@angular/core';
import { NewHotelFormComponent } from './new-form/new-form.component';
import { Store, select } from '@ngrx/store';
import { setAllHotelForm } from 'src/store/actions/newHotel.actions';
import { AppState } from 'src/store';
import { UploadHotelImgComponent } from './upload-img/upload-img.component';

@Component({
  selector: 'hotel-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingHotelComponent implements OnInit {
  @ViewChild(NewHotelFormComponent)
  private form: NewHotelFormComponent;
  @ViewChild(UploadHotelImgComponent)
  private hotelImages: UploadHotelImgComponent;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  get formData() {
    return this.form.hotelForm.value;
  }
  get images() {
    const arrayFileImgs = [] as File[];
    for (const item of this.hotelImages.images) {
      arrayFileImgs.push(item.img);
    }
    return arrayFileImgs;
  }

  formIsInvalid(): boolean {
    return this.form.hotelForm.invalid;
  }

  onCreateBtn() {
    this.store.dispatch(
      setAllHotelForm.request({ hotelForm: this.formData, images: this.images })
    );
  }
}
