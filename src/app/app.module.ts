import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from 'src/modules/nav/nav.module';
import { UserModule } from 'src/modules/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
