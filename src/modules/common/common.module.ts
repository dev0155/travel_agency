import { NgModule } from '@angular/core';
import { CommonModule as Common } from '@angular/common';
import { ClickOutsideDirective } from 'src/components/common/click_outside/click-outside.directive';
import { TabsComponent } from 'src/components/common/tabs/tabs.component';

@NgModule({
  declarations: [ClickOutsideDirective, TabsComponent],
  imports: [Common],
  exports: [ClickOutsideDirective, TabsComponent],
})
export class CommonModule {}
