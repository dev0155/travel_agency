import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/components/nav/sidebar/sidebar.component';
import { HeaderComponent } from 'src/components/nav/header/header.component';
import { NavComponent } from 'src/components/nav/nav.component';
import { SidebarService } from 'src/services/sidebar.service';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, NavComponent],
  imports: [CommonModule],
  exports: [NavComponent],
  providers: [SidebarService],
})
export class NavModule {}
