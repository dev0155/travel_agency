import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { CommonModule as Common } from 'src/modules/common/common.module';
import { UploadHotelImgComponent } from 'src/components/hotels/creating/upload-img/upload-img.component';
import { HotelService } from 'src/services/hotel.service';
import { HotelEffects } from 'src/store/effects/hotel.effects';
import { HotelsComponent } from 'src/pages/hotels/hotels.component';
import { CreatingHotelComponent } from 'src/components/hotels/creating/creating.component';
import { NewHotelFormComponent } from 'src/components/hotels/creating/new-form/new-form.component';
import { HotelItemComponent } from 'src/components/hotels/hotel-item/hotel-item.component';
import { HotelDetailComponent } from 'src/components/hotels/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsComponent,
  },
  {
    path: ':id/detail',
    component: HotelDetailComponent,
  },
  {
    path: 'create-hotel',
    component: CreatingHotelComponent,
  },
];

@NgModule({
  declarations: [
    HotelsComponent,
    HotelItemComponent,
    CreatingHotelComponent,
    NewHotelFormComponent,
    UploadHotelImgComponent,
    HotelDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([HotelEffects]),
    NgSelectModule,
    NgxPaginationModule,
    Common,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [HotelService],
})
export class HotelsModule {}
