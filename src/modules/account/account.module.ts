import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AccountComponent } from 'src/pages/account/account.component';
import { UserFormComponent } from 'src/components/account/user-form/user-form.component';
import { CompanyFormComponent } from 'src/components/account/company-form/company-form.component';

const routes: Route[] = [
  {
    path: '',
    component: AccountComponent,
  },
];
@NgModule({
  declarations: [AccountComponent, UserFormComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
  ],
})
export class AccountModule {}
