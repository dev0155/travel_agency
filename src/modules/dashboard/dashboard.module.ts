import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { InfoBlockComponent } from 'src/components/dashboard/info-block/info-block.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [DashboardComponent, InfoBlockComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DashboardModule { }
