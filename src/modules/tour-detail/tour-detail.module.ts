import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from 'src/components/tour-detail/tab-panel/tabs/tabs.component';
import { TourDetailComponent } from 'src/pages/tour-detail/tour-detail.component';
import { TabPanelComponent } from 'src/components/tour-detail/tab-panel/tab-panel.component';
import { GeneralComponent } from 'src/components/tour-detail/tab-panel/content/general/general.component';
import { ServiceComponent } from 'src/components/tour-detail/tab-panel/content/service/service.component';
import { PhotosComponent } from 'src/components/tour-detail/tab-panel/content/photos/photos.component';
import { MapComponent } from 'src/components/tour-detail/tab-panel/content/map/map.component';
import { CommentsComponent } from 'src/components/tour-detail/tab-panel/content/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: TourDetailComponent,
  },
];

@NgModule({
  declarations: [
    TourDetailComponent,
    TabsComponent,
    TabPanelComponent,
    GeneralComponent,
    ServiceComponent,
    PhotosComponent,
    MapComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TourDetailModule {}
