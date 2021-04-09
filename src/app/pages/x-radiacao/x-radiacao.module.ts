import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XRadiacaoPageRoutingModule } from './x-radiacao-routing.module';

import { XRadiacaoPage } from './x-radiacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XRadiacaoPageRoutingModule
  ],
  declarations: [XRadiacaoPage]
})
export class XRadiacaoPageModule {}
