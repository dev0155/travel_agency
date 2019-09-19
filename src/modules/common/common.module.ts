import { NgModule } from '@angular/core';
import { CommonModule as Common } from '@angular/common';
import { ClickOutsideDirective } from 'src/components/common/click_outside/click-outside.directive';
import { TabsComponent } from 'src/components/common/tabs/tabs.component';
import { RatingComponent } from 'src/components/common/rating/rating.component';

@NgModule({
  declarations: [ClickOutsideDirective, TabsComponent, RatingComponent],
  imports: [Common],
  exports: [ClickOutsideDirective, TabsComponent, RatingComponent],
})
export class CommonModule {}
