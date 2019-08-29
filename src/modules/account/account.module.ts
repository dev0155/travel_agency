import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AccountComponent } from 'src/pages/account/account.component';


const routes: Route[] = [
  {
    path: '',
    component: AccountComponent
  }
]
@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountModule { }
