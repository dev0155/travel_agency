import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourHeaderInfoSectionComponent } from './components/tour-header-info-section/tour-header-info-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TourHeaderInfoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
