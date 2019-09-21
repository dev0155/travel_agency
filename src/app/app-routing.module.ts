import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/components/layout/layout/layout.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RouteResolver } from 'src/resolver/account.resolver';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('src/modules/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'tours',
        loadChildren: () =>
          import('src/modules/tours/tours.module').then((m) => m.ToursModule),
      },
      {
        path: 'hotels',
        loadChildren: () =>
          import('src/modules/hotels/hotels.module').then(
            (m) => m.HotelsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver],
})
export class AppRoutingModule {}
