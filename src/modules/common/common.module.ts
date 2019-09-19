import { NgModule } from '@angular/core';
import { CommonModule as Common } from '@angular/common';
import { ClickOutsideDirective } from 'src/components/common/click_outside/click-outside.directive';

@NgModule({
  declarations: [ClickOutsideDirective],
  imports: [Common],
  exports: [ClickOutsideDirective],
})
export class CommonModule {}
