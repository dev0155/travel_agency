import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITour } from 'src/interfaces/basics/tour.model';
import { AppState } from 'src/store';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ToursActions } from 'src/store/actions/tours.actions';

const tabs: string[] = ['General', 'Service', 'Photos', 'Map', 'Comments'];

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss'],
})
export class TourDetailComponent implements OnInit {
  private id: number;
  private storeSubscription: Subscription;

  public tour = {} as ITour;
  public tabs: string[] = [];
  public currentTab: string = 'General';

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.tabs = tabs;
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(ToursActions.getById.request({ id }));
  }

  public onChangeTab(tabName: string): void {
    this.currentTab = tabName;
  }
}
