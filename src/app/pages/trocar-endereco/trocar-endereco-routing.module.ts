import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrocarEnderecoPage } from './trocar-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: TrocarEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrocarEnderecoPageRoutingModule {}
