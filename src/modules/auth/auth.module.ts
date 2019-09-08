import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "src/pages/login/login.component";
import { ButtonModule } from "../common/button/button.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ButtonModule]
})
export class LoginModule {}
