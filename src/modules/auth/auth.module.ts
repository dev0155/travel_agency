import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as Common } from 'src/modules/common/common.module';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { EffectsModule } from '@ngrx/effects';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RouterModule } from '@angular/router';
// import { AuthEffects } from 'src/store/effects/auth.effects';
@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    Common,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // EffectsModule.forFeature([AuthEffects]),
    SimpleNotificationsModule.forRoot(),
  ],
})
export class AuthModule {}
