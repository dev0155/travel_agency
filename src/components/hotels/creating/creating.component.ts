import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppState } from 'src/store';
import { UploadHotelImgComponent } from './upload-img/upload-img.component';
import { INewHotelState } from 'src/store/reducer/newHotel.reducer';
import { setAllHotelForm } from 'src/store/actions/newHotel.actions';

@Component({
  selector: 'hotel-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingHotelComponent implements OnInit {
  @ViewChild(UploadHotelImgComponent)
  private hotelImages: UploadHotelImgComponent;

  public hotelForm = null;
  public loading$: Observable<INewHotelState>;
  public showSpinner = false;
  private amount = 0;

  constructor(private store: Store<AppState>, private router: Router) {
    this.loading$ = store.pipe(select((state: AppState) => state.newHotel));
  }

  ngOnInit() {
    this.loading$.subscribe((state) => {
      this.isCompleted(state.loadedImgCounter);
    });
  }

  get images(): File[] {
    if (this.hotelImages) {
      const fileImages = [] as File[];
      this.hotelImages.images.map((item) => fileImages.push(item.img));
      return fileImages;
    } else {
      return [];
    }
  }

  onCreateBtn(): void {
    this.amount = this.images.length;
    this.store.dispatch(
      setAllHotelForm.request({
        hotelForm: this.hotelForm,
        images: this.images,
      })
    );
  }

  setForm(form): void {
    this.hotelForm = form;
  }

  isCompleted(imgWereLoaded: number) {
    if (imgWereLoaded === this.amount) {
      setTimeout(() => {
        this.showSpinner = false;
        this.router.navigateByUrl('/hotels');
      }, 3000);
    } else if (imgWereLoaded === null) {
      this.showSpinner = false;
    } else if (this.amount === 0) {
      this.showSpinner = false;
    } else {
      this.showSpinner = true;
    }
  }

  isBtnDisable() {
    return !(this.hotelForm && this.images.length !== 0);
  }
}
