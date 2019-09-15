import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from 'src/components/profile/user-form/user-form.component';
import { CompanyFormComponent } from 'src/components/profile/company-form/company-form.component';
import { ProfileComponent } from 'src/pages/profile/profile.component';

const routes: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
@NgModule({
  declarations: [ProfileComponent, UserFormComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule {}
