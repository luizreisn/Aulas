import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contato } from 'src/app/home/home.page';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent{

  @Input() contato: Contato;

  constructor(private modal: ModalController) { }

  fecharModal(){
    this.modal.dismiss();
  }

}
