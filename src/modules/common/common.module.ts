import { NgModule } from '@angular/core';
import { CommonModule as Common } from '@angular/common';
import { PaginationComponent } from 'src/components/pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [Common],
  exports: [
    PaginationComponent
  ],
})
export class CommonModule {}