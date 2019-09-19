import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ToursComponent } from 'src/pages/tours/tours.component';
import { TourItemComponent } from 'src/components/tours/tour-item/tour-item.component';
import { TourDetailComponent } from 'src/pages/tour-detail/tour-detail.component';

const routes: Route[] = [
  {
    path: '',
    component: TourItemComponent,
  },
  {
    path: ':id',
    component: TourDetailComponent,
  },
];
@NgModule({
  declarations: [ToursComponent, TourItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ToursComponent, TourItemComponent]
})
export class ToursModule {}