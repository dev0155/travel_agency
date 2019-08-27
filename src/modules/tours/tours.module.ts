import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ToursComponent } from 'src/pages/tours/tours.component';


const routes: Route[] = [
  {
    path: '',
    component: ToursComponent
  }
]
@NgModule({
  declarations: [ToursComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ToursModule { }
