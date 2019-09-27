import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store';
import { ToursActions } from 'src/store/actions/tours.actions';
import { HotelActions } from 'src/store/actions/hotel.actions';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.setDataToStore();
  }

  private setDataToStore(): void {
    this.store.dispatch(ToursActions.getServices.request());
    this.store.dispatch(HotelActions.getAll.request());
  }
}
