import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesPage } from './detalhes.page';

const routes: Routes = [
  {
    path: ':user',
    component: DetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesPageRoutingModule {}
