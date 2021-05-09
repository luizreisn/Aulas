import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { Contato } from '../services/contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contatos: Contato[] = []

  constructor(private modal: ModalController) {}

  public async abrirModal(contatoSelecionado: Contato){
    const modal = await this.modal.create({
      component: DetailsModalComponent,
      componentProps: {
        contato: contatoSelecionado
      }
    });
    modal.present();
  }

}