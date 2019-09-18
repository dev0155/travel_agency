import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule as Common } from 'src/modules/common/common.module';

import { HotelItemComponent } from 'src/components/hotels/hotel-item/hotel-item.component';
import { CreatingHotelComponent } from 'src/components/hotels/creating/creating.component';
import { NewHotelFormComponent } from 'src/components/hotels/creating/new-form/new-form.component';
import { HotelsComponent } from 'src/pages/hotels/hotels.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadHotelImgComponent } from 'src/components/hotels/creating/upload-img/upload-img.component';
import { HotelService } from 'src/services/hotel.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HotelEffects } from 'src/store/effects/hotel.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HotelReducer } from 'src/store/reducer/hotel.reducer';

const routes: Routes = [
  {
    path: '',
    component: HotelsComponent,
  },
  {
    path: 'creating',
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    StoreModule.forFeature('hotel', HotelReducer),
    EffectsModule.forFeature([HotelEffects]),
  ],
  providers: [HotelService],
})
export class HotelsModule {}
