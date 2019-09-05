import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ToursComponent } from 'src/pages/tours/tours.component';
import { TourItemComponent } from 'src/components/tours/tour-item/tour-item.component';

const routes: Route[] = [
  {
    path: '',
    component: ToursComponent,
  },
];
@NgModule({
  declarations: [ToursComponent, TourItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ToursModule {}
