import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as Common } from 'src/modules/common/common.module';
import { HotelItemComponent } from 'src/components/hotels/hotel-item/hotel-item.component';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from 'src/pages/hotel/hotel.component';
import { ToursService } from 'src/services/tours.service';

const routes: Routes = [{ path: '', component: HotelComponent }];

@NgModule({
  declarations: [HotelItemComponent, HotelComponent],
  imports: [CommonModule, RouterModule.forChild(routes), Common],
  providers: [ToursService],
})
export class HotelsModule {}
