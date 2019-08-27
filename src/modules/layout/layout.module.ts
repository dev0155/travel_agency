import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/components/layout/dashboard/dashboard.component';
import { HeaderComponent } from 'src/components/layout/header/header.component';
import { SidebarComponent } from 'src/components/layout/sidebar/sidebar.component';
import { SidebarService } from 'src/services/sidebar.service';
import { InfoBlockComponent } from 'src/components/layout/dashboard/info-block/info-block.component';
import { UserPortalComponent } from 'src/components/layout/user-portal/user-portal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    InfoBlockComponent,
    UserPortalComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [SidebarService],
  exports: [
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    UserPortalComponent,
  ],
})
export class LayoutModule {}