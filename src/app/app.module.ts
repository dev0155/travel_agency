import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "src/modules/layout/layout.module";
import { LoginModule } from "src/modules/auth/auth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LayoutModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
