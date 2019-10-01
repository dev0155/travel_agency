import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/store';
import { ToursActions } from 'src/store/actions/tours.actions';
import { HotelActions } from 'src/store/actions/hotel.actions';
import { ITour } from 'src/interfaces/basics/tour.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit, OnDestroy {
  public tours$ = this.store.pipe(select('tours'));
  public collection = [] as ITour[];
  public page = +this.route.snapshot.queryParams.page;
  public length = 1;
  public itemsPerPage = 5;
  public search: string;

  private toursSub: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setDataToStore();
    this.toursSub = this.tours$.subscribe(({ items, paginator }) => {
      if (items && paginator) {
        this.collection = items;
        this.length = paginator.total;
        this.itemsPerPage = this.length < 25 ? 5 : this.length < 50 ? 10 : 20;
      }
    });
    // this.toursSub.unsubscribe();
    // this.page = +this.route.snapshot.queryParams.page || 1;
    // this.router.navigate(['tours/'], { queryParams: { page: this.page } });
  }

  ngOnDestroy() {
    // this.toursSub.unsubscribe();
  }

  private setDataToStore(): void {
    this.store.dispatch(
      ToursActions.getAll.request({ params: this.pageParams })
    );
    this.store.dispatch(ToursActions.getServices.request());
    this.store.dispatch(HotelActions.getAll.request());
  }

  public changePage(e) {
    console.log('change page', e);
    this.page = e;

    this.router.navigate(['tours/'], { queryParams: { page: this.page } });
    this.store.dispatch(
      ToursActions.getAll.request({ params: this.pageParams })
    );
  }

  public searchClick() {
    this.store.dispatch(ToursActions.search.request({ target: this.search }));
  }

  private get pageParams() {
    return {
      page: this.page,
      limit: this.itemsPerPage,
    };
  }
}
