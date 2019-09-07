import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AccountComponent } from 'src/pages/account/account.component';
import { ProfileComponent } from 'src/components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from 'src/components/profile/user-form/user-form.component';
import { CompanyFormComponent } from 'src/components/profile/company-form/company-form.component';

const routes: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    UserFormComponent,
    CompanyFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule {}
