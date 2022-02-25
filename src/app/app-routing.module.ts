import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderListComponent} from './order-list/order-list.component';

const routes: Routes = [
  {
  path: 'list',
  component: OrderListComponent
  },
  {
  path: 'detail',
  component: OrderDetailComponent
  },
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'list'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
