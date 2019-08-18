import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPortalComponent } from 'src/components/user-portal/user-portal.component';

@NgModule({
  declarations: [
    UserPortalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserPortalComponent
  ]
})
export class UserModule { }