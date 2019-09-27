import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/store';
import { UsersActions } from 'src/store/actions/users.actions';
import { CompanyActions } from 'src/store/actions/company.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.dispatchUsersAction();
  }

  private dispatchUsersAction() {
    let userId: number = null;
    this.store.pipe(select('auth')).subscribe(({ id }) => (userId = id));
    console.log(userId);
    this.store.dispatch(UsersActions.getById.request({ id: userId }));
    this.store.dispatch(CompanyActions.getByUserId.request({ id: userId }));
  }
}
