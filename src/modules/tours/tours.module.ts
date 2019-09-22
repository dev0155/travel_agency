import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CommonModule as Common } from 'src/modules/common/common.module';
import { TourItemComponent } from 'src/components/tours/tour-item/tour-item.component';
import { TourDetailComponent } from 'src/pages/tour-detail/tour-detail.component';
import { TabPanelComponent } from 'src/components/tours/tour-detail/tab-panel/tab-panel.component';
import { GeneralComponent } from 'src/components/tours/tour-detail/tab-panel/content/general/general.component';
import { ServiceComponent } from 'src/components/tours/tour-detail/tab-panel/content/service/service.component';
import { PhotosComponent } from 'src/components/tours/tour-detail/tab-panel/content/photos/photos.component';
import { MapComponent } from 'src/components/tours/tour-detail/tab-panel/content/map/map.component';
import { CommentsComponent } from 'src/components/tours/tour-detail/tab-panel/content/comments/comments.component';
import { HeaderComponent } from 'src/components/tours/tour-detail/header/header.component';
import { ToursService } from 'src/services/tours.service';
import { SpinnerComponent } from 'src/components/common/spinner/spinner.component';

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
  declarations: [
    TourDetailComponent,
    HeaderComponent,
    TabPanelComponent,
    GeneralComponent,
    ServiceComponent,
    PhotosComponent,
    MapComponent,
    CommentsComponent,
    SpinnerComponent,
    TourItemComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), Common],
  providers: [ToursService],
})
export class ToursModule {}