import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrocarEnderecoPageRoutingModule } from './trocar-endereco-routing.module';

import { TrocarEnderecoPage } from './trocar-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrocarEnderecoPageRoutingModule
  ],
  declarations: [TrocarEnderecoPage]
})
export class TrocarEnderecoPageModule {}
