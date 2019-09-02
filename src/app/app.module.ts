import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LayoutModule } from "src/modules/layout/layout.module";
import { TourHeaderInfoSectionComponent } from "src/components/tour-header-info-section/tour-header-info-section.component";
import { TourItemComponent } from "src/components/tour-item/tour-item.component";

@NgModule({
  declarations: [AppComponent, TourHeaderInfoSectionComponent, TourItemComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
