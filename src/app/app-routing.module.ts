import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "src/components/layout/layout/layout.component";

const routes: Routes = [
  // { // for login, register pages
  //   path: 'account',
  //   component: ProfilePageComponent,
  // },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("src/modules/dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "account",
        loadChildren: () => import("src/modules/account/account.module").then(m => m.AccountModule)
      },
      {
        path: "tours",
        // loadChildren: () =>
        //   import('src/modules/tours/tours.module').then(
        //     (m) => m.ToursModule
        //   ),
        //
        //
        // ************
        // MUST ADD ROUTING FOR THE TOUR DETAIL PAGE
        // ************
        loadChildren: () => import("src/modules/tour-detail/tour-detail.module").then(m => m.TourDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
