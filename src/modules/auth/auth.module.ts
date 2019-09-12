import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as Common } from 'src/modules/common/common.module';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { EffectsModule } from '@ngrx/effects';
// import { AuthEffects } from 'src/store/effects/auth.effects';
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    Common,
    FormsModule,
    ReactiveFormsModule,
    // EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
