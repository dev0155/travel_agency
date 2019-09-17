import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from 'src/components/layout/layout/layout.component';
import { HeaderComponent } from 'src/components/layout/header/header.component';
import { SidebarComponent } from 'src/components/layout/sidebar/sidebar.component';
import { UserPortalComponent } from 'src/components/layout/user-portal/user-portal.component';
import { CommonModule as Common } from 'src/modules/common/common.module';
import { SidebarService } from 'src/services/sidebar.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    UserPortalComponent,
  ],
  imports: [CommonModule, RouterModule, Common],
  exports: [LayoutComponent],
  providers: [SidebarService],
})
export class LayoutModule {}
