import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/components/nav/sidebar/sidebar.component';
import { HeaderComponent } from 'src/components/nav/header/header.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, HeaderComponent],
})
export class NavModule {}
