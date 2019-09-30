import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/store';
import { ToursActions } from 'src/store/actions/tours.actions';
import { HotelActions } from 'src/store/actions/hotel.actions';
import { ITour } from 'src/interfaces/basics/tour.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit {
  public tours$ = this.store.pipe(select('tours'));
  public collection = [] as ITour[];
  public page = 1;
  public length = 1;
  public itemsPerPage = 5;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.changePage({ page: this.page, itemsPerPage: this.itemsPerPage });
    this.setDataToStore();
    this.tours$.subscribe(({ items, paginator }) => {
      if (items && paginator) {
        this.collection = items;
        this.length = paginator.total;
        this.itemsPerPage =
          paginator.total < 25 ? 5 : paginator.total < 50 ? 10 : 20;
      }
    });
  }

  private setDataToStore(): void {
    this.store.dispatch(ToursActions.getServices.request());
    this.store.dispatch(HotelActions.getAll.request());
  }

  public changePage(e) {
    this.page = e.page ? e.page - 1 : e - 1;
    this.store.dispatch(
      ToursActions.getAll.request({ params: this.searchParams })
    );
  }

  private get searchParams() {
    return {
      page: this.page,
      limit: this.itemsPerPage,
    };
  }
}
