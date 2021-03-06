import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as Common } from 'src/modules/common/common.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from 'src/services/auth.service';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/store/effects/auth.effects';
import { UsersService } from 'src/services/users.service';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    Common,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    EffectsModule.forRoot([AuthEffects, UsersService]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
