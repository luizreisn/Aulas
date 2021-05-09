import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosGithubPageRoutingModule } from './usuarios-github-routing.module';

import { UsuariosGithubPage } from './usuarios-github.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosGithubPageRoutingModule
  ],
  declarations: [UsuariosGithubPage]
})
export class UsuariosGithubPageModule {}
