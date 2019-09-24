import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppState } from 'src/store';
import { UploadHotelImgComponent } from './upload-img/upload-img.component';
import { IHotelState } from 'src/store/reducer/hotel.reducer';
import { HotelActions } from 'src/store/actions/hotel.actions';

@Component({
  selector: 'hotel-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingHotelComponent implements OnInit {
  @ViewChild(UploadHotelImgComponent)
  private hotelImages: UploadHotelImgComponent;
  private hotelForm = null;
  private amount = 0;
  private loading$: Observable<IHotelState>;

  public showSpinner = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.loading$ = store.pipe(select((state: AppState) => state.hotel));
  }

  ngOnInit() {
    this.loading$.subscribe((state) => {
      this.isCompleted(state.loadedImgCounter);
    });
  }

  public setForm(form: any): void {
    this.hotelForm = form;
  }

  public isBtnDisable() {
    return !(this.hotelForm && this.images.length !== 0);
  }

  public onCreateBtn(): void {
    this.amount = this.images.length;
    this.store.dispatch(
      HotelActions.createHotel.request({
        hotelForm: this.hotelForm,
        images: this.images,
      })
    );
  }

  private get images(): File[] {
    if (this.hotelImages) {
      const fileImages = [] as File[];
      this.hotelImages.images.map((item) => fileImages.push(item.img));
      return fileImages;
    } else {
      return [];
    }
  }

  private isCompleted(imgWereLoaded: number) {
    if (imgWereLoaded === this.amount) {
      this.showSpinner = false;
      this.router.navigateByUrl('/hotels');
    } else if (imgWereLoaded === null || this.amount === 0) {
      this.showSpinner = false;
    } else {
      this.showSpinner = true;
    }
  }
}
