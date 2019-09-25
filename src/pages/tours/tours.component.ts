import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/store';
import { ToursActions } from 'src/store/actions/tours.actions';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(ToursActions.getServices.request());
    // this.store.pipe(select('tours')).subscribe((data) => console.log(data));
  }
}
