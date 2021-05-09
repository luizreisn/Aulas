import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimounaoPageRoutingModule } from './simounao-routing.module';

import { SimounaoPage } from './simounao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimounaoPageRoutingModule
  ],
  declarations: [SimounaoPage]
})
export class SimounaoPageModule {}
