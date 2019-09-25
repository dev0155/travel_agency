import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ToursComponent } from 'src/pages/tours/tours.component';
import { TourItemComponent } from 'src/components/tours/tour-item/tour-item.component';
import { CreatingTourComponent } from 'src/components/tours/creating/creating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Route[] = [
  {
    path: '',
    component: ToursComponent,
  },
  {
    path: 'tour-detail',
    loadChildren: () =>
      import('src/modules/tour-detail/tour-detail.module').then(
        (m) => m.TourDetailModule
      ),
  },
  {
    path: 'creating',
    component: CreatingTourComponent,
  },
];
@NgModule({
  declarations: [ToursComponent, TourItemComponent, CreatingTourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class ToursModule {}
