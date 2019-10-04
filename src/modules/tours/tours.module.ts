import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ToursComponent } from 'src/pages/tours/tours.component';
import { TourItemComponent } from 'src/components/tours/tour-item/tour-item.component';
import { CreatingTourComponent } from 'src/components/tours/creating/creating.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { EffectsModule } from '@ngrx/effects';

import { CommonModule as Common } from 'src/modules/common/common.module';
import { ToursEffects } from 'src/store/effects/tours.effects';
import { ToursService } from 'src/services/tours.service';
import { HotelService } from 'src/services/hotel.service';
import { HotelEffects } from 'src/store/effects/hotel.effects';
import { SimpleNotificationsModule } from 'angular2-notifications';

const routes: Route[] = [
  {
    path: '',
    component: ToursComponent,
  },
  {
    path: ':id/detail',
    loadChildren: () =>
      import('src/modules/tour-detail/tour-detail.module').then(
        (m) => m.TourDetailModule
      ),
  },
  {
    path: 'create-tour',
    component: CreatingTourComponent,
  },
];
@NgModule({
  declarations: [ToursComponent, TourItemComponent, CreatingTourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ToursEffects, HotelEffects]),
    NgSelectModule,
    NgxPaginationModule,
    Common,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [ToursService, HotelService],
})
export class ToursModule {}
