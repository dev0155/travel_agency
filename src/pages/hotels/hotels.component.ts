import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { AppState } from 'src/store';
import { IHotel } from 'src/interfaces/basics/hotel.model';
import { HotelActions } from 'src/store/actions/hotel.actions';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  public hotels$ = this.store.pipe(select('hotel'));
  public loading = false;
  public collection = [] as IHotel[];
  public page = +this.route.snapshot.queryParams.page || 1;
  public length = 1;
  public itemsPerPage = 5;
  public search: string;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(
      HotelActions.getAll.request({
        params: this.pageParams,
      })
    );

    this.hotels$.subscribe(({ items, paginator, loading }) => {
      this.loading = loading;
      if (items && paginator) {
        this.collection = items;
        this.length = paginator.total;
        this.itemsPerPage = this.length < 25 ? 5 : this.length < 50 ? 10 : 20;
      }
    });
  }

  public changePage(e): void {
    this.page = e;
    this.router.navigate(['hotels'], { queryParams: { page: this.page } });
    if (this.search) {
      this.store.dispatch(
        HotelActions.search.request({
          params: { ...this.pageParams, target: this.search },
        })
      );
    } else {
      this.collection = null;
      setTimeout(
        () =>
          this.store.dispatch(
            HotelActions.getAll.request({
              params: this.pageParams,
            })
          ),
        2000
      );
    }
  }

  public inputClick(): void {
    this.search = '';
  }

  public searchClick(): void {
    this.page = 1;
    this.store.dispatch(
      HotelActions.search.request({
        params: { ...this.pageParams, target: this.search },
      })
    );
  }

  private get pageParams() {
    return {
      page: this.page,
      limit: this.itemsPerPage,
    };
  }
}
