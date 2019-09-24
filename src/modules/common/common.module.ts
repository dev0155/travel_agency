import { NgModule } from '@angular/core';
import { CommonModule as Common } from '@angular/common';
import { ClickOutsideDirective } from 'src/components/common/click_outside/click-outside.directive';
import { TabsComponent } from 'src/components/common/tabs/tabs.component';
import { RatingComponent } from 'src/components/common/rating/rating.component';
import { SpinnerComponent } from 'src/components/common/spinner/spinner.component';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    TabsComponent,
    RatingComponent,
    SpinnerComponent,
  ],
  imports: [Common],
  exports: [
    ClickOutsideDirective,
    TabsComponent,
    RatingComponent,
    SpinnerComponent,
  ],
})
export class CommonModule {}
