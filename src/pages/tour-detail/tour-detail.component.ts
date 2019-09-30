import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITour } from 'src/interfaces/basics/tour.model';
import { AppState } from 'src/store';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

const tabs: string[] = ['General', 'Service', 'Photos', 'Map', 'Comments'];

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss'],
})
export class TourDetailComponent implements OnInit, OnDestroy {
  private id: number;
  private storeSubscription: Subscription;

  public tour = {} as ITour;
  public tabs: string[] = [];
  public currentTab: string = 'General';

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.tabs = tabs;
  }

  ngOnInit() {
    this.getTourFromStore();
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  private getTourFromStore() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.storeSubscription = this.store
      .pipe(select('tours'))
      .subscribe(({ items }) => {
        if (this.id) {
          this.tour = items[this.id];
        }
      });
  }

  public onChangeTab(tabName: string) {
    this.currentTab = tabName;
  }
}
