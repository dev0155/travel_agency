import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NewHotelFormComponent } from './new-form/new-form.component';
import { Store, select, createSelector } from '@ngrx/store';
import { setAllHotelForm } from 'src/store/actions/newHotel.actions';
import { AppState } from 'src/store';
import { UploadHotelImgComponent } from './upload-img/upload-img.component';
import { Observable } from 'rxjs';
import { INewHotelState } from 'src/store/reducer/newHotel.reducer';
import { Router } from '@angular/router';

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

  get images() {
    if (this.hotelImages) {
      const arrayFileImgs = [] as File[];
      for (const item of this.hotelImages.images) {
        arrayFileImgs.push(item.img);
      }
      return arrayFileImgs;
    } else {
      return [];
    }
  }

  onCreateBtn() {
    this.amount = this.images.length;
    this.store.dispatch(
      setAllHotelForm.request({
        hotelForm: this.hotelForm,
        images: this.images,
      })
    );
  }

  getForm(form) {
    this.hotelForm = form;
  }

  isCompleted(imgWereLoaded: number) {
    if (imgWereLoaded === this.amount) {
      this.showSpinner = false;
      this.router.navigateByUrl('/hotels');
    } else if (imgWereLoaded === null) {
      this.showSpinner = false;
    } else {
      this.showSpinner = true;
    }
  }
}
