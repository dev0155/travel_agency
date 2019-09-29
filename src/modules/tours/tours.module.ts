import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CommonModule as Common } from 'src/modules/common/common.module';
import { TourItemComponent } from 'src/components/tours/tour-item/tour-item.component';
import { CreatingTourComponent } from 'src/components/tours/creating/creating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EffectsModule } from '@ngrx/effects';
import { ToursEffects } from 'src/store/effects/tours.effects';
import { ToursService } from 'src/services/tours.service';
import { HotelService } from 'src/services/hotel.service';
import { HotelEffects } from 'src/store/effects/hotel.effects';
import { TourDetailComponent } from 'src/pages/tour-detail/tour-detail.component';
import { TabPanelComponent } from 'src/components/tours/tour-detail/tab-panel/tab-panel.component';
import { GeneralComponent } from 'src/components/tours/tour-detail/tab-panel/content/general/general.component';
import { ServiceComponent } from 'src/components/tours/tour-detail/tab-panel/content/service/service.component';
import { PhotosComponent } from 'src/components/tours/tour-detail/tab-panel/content/photos/photos.component';
import { MapComponent } from 'src/components/tours/tour-detail/tab-panel/content/map/map.component';
import { CommentsComponent } from 'src/components/tours/tour-detail/tab-panel/content/comments/comments.component';
import { HeaderComponent } from 'src/components/tours/tour-detail/header/header.component';

const routes: Route[] = [
  {
    path: '',
    component: TourItemComponent,
  },
  {
    path: ':id',
    component: TourDetailComponent,
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
  declarations: [
    TourDetailComponent,
    HeaderComponent,
    TabPanelComponent,
    GeneralComponent,
    ServiceComponent,
    PhotosComponent,
    MapComponent,
    CommentsComponent,
    TourItemComponent,
    TourItemComponent,
    CreatingTourComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Common,
    NgSelectModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ToursEffects, HotelEffects]),
  ],
  providers: [ToursService, HotelService],
})
export class ToursModule {}
