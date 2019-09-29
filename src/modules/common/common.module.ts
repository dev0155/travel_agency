import { NgModule } from '@angular/core';
import { CommonModule as Common } from '@angular/common';
import { ClickOutsideDirective } from 'src/components/common/click_outside/click-outside.directive';
import { TabsComponent } from 'src/components/common/tabs/tabs.component';
import { RatingComponent } from 'src/components/common/rating/rating.component';
import { SpinnerComponent } from 'src/components/common/spinner/spinner.component';
import { PaginationComponent } from 'src/components/common/pagination/pagination.component';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    TabsComponent,
    RatingComponent,
    SpinnerComponent,
    PaginationComponent
  ],
  imports: [Common],
  exports: [
    ClickOutsideDirective,
    TabsComponent,
    RatingComponent,
    SpinnerComponent,
    PaginationComponent
  ],
})
export class CommonModule {}
