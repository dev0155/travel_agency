import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SliderModule } from 'angular-image-slider';
import { AgmCoreModule } from '@agm/core';

import { CommonModule as Common } from 'src/modules/common/common.module';
import { TourDetailComponent } from 'src/pages/tour-detail/tour-detail.component';
import { TabPanelComponent } from 'src/components/tour-detail/tab-panel/tab-panel.component';
import { GeneralComponent } from 'src/components/tour-detail/tab-panel/content/general/general.component';
import { ServiceComponent } from 'src/components/tour-detail/tab-panel/content/service/service.component';
import { PhotosComponent } from 'src/components/tour-detail/tab-panel/content/photos/photos.component';
import { MapComponent } from 'src/components/tour-detail/tab-panel/content/map/map.component';
import { CommentsComponent } from 'src/components/tour-detail/tab-panel/content/comments/comments.component';
import { HeaderComponent } from 'src/components/tour-detail/header/header.component';
import { ToursService } from 'src/services/tours.service';

const routes: Routes = [
  {
    path: '',
    component: TourDetailComponent,
  },
];

@NgModule({
  declarations: [
    TourDetailComponent,
    HeaderComponent,
    TabPanelComponent,
    GeneralComponent,
    ServiceComponent,
    PhotosComponent,
    MapComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    RouterModule.forChild(routes),
    Common,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
  ],
  providers: [ToursService],
})
export class TourDetailModule {}
