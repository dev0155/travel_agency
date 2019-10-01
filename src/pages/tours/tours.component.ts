import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/store';
import { ToursActions } from 'src/store/actions/tours.actions';
import { ITour } from 'src/interfaces/basics/tour.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit {
  public tours$ = this.store.pipe(select('tours'));
  public loading = false;
  public collection = [] as ITour[];
  public page = +this.route.snapshot.queryParams.page;
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
      ToursActions.getAll.request({
        params: this.pageParams,
      })
    );

    this.tours$.subscribe(({ items, paginator, loading }) => {
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
    this.router.navigate(['tours'], { queryParams: { page: this.page } });
    this.store.dispatch(
      ToursActions.getAll.request({
        params: this.pageParams,
      })
    );
  }

  public inputClick(): void {
    this.search = '';
  }

  public searchClick(): void {
    this.store.dispatch(ToursActions.search.request({ target: this.search }));
  }

  private get pageParams() {
    return {
      page: this.page,
      limit: this.itemsPerPage,
    };
  }
}
