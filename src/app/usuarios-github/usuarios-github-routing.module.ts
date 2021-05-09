import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosGithubPage } from './usuarios-github.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosGithubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosGithubPageRoutingModule {}
