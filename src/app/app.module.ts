import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { AccountModule } from 'src/modules/account/account.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, AccountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
