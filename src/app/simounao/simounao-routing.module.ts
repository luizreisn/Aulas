import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimounaoPage } from './simounao.page';

const routes: Routes = [
  {
    path: '',
    component: SimounaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimounaoPageRoutingModule {}
