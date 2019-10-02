import { Component, OnInit } from '@angular/core';
import { ITour } from 'src/interfaces/basics/tour.model';
import { AppState } from 'src/store';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ToursActions } from 'src/store/actions/tours.actions';
import { API_URL } from 'src/endpoints';

const tabs: string[] = ['General', 'Service', 'Photos', 'Map', 'Comments'];

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss'],
})
export class TourDetailComponent implements OnInit {
  public tour = {} as ITour;
  public tabs: string[] = [];
  public currentTab = 'General';
  public loading = false;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.tabs = tabs;
  }

  ngOnInit() {
    this.initData();
  }

  private initData(): void {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(ToursActions.getById.request({ id }));
    this.store.pipe(select('tours')).subscribe(({ item, loading }) => {
      this.loading = loading;
      if (item) {
        this.tour = item;
      }
    });
  }

  public get imagesPath(): string[] {
    const path = [];
    this.tour.hotel.images.map((item) => path.push(`${API_URL}/${item.image}`));
    return path;
  }

  public onChangeTab(tabName: string): void {
    this.currentTab = tabName;
  }
}
