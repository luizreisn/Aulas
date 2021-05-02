import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
