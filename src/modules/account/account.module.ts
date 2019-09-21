import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from 'src/pages/account/account.component';
import { UserFormComponent } from 'src/components/account/user-form/user-form.component';
import { CompanyFormComponent } from 'src/components/account/company-form/company-form.component';
import { EffectsModule } from '@ngrx/effects';
import { AccountUserEffects } from 'src/store/effects/account/user.effects';
import { RouteResolver } from 'src/resolver/account.resolver';

const routes: Route[] = [
  {
    path: ':id',
    component: AccountComponent,
    resolve: {
      userInfo: RouteResolver,
    },
  },
];
@NgModule({
  declarations: [AccountComponent, UserFormComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AccountUserEffects]),
  ],
})
export class AccountModule {}
