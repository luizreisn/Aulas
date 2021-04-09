import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XRadiacaoPage } from './x-radiacao.page';

const routes: Routes = [
  {
    path: '',
    component: XRadiacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XRadiacaoPageRoutingModule {}
