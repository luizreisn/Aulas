import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';

export interface Contato{
  nome: string;
  usuario: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contatos: Contato[] = [
    {
      nome: 'Luiz Reis',
      usuario: 'luizreisn'
    },{
      nome: 'Carolina',
      usuario: 'sushiland'
    },{
      nome: 'Karine',
      usuario: 'kaf135'
    },{
      nome: 'João Pedro',
      usuario: 'jpssantiago'
   },{
      nome: 'Beatriz',
      usuario: 'BeatrizMarcos'
   },{
      nome: 'Luccas',
      usuario: 'itsLuccas'
   },{
      nome: 'Nícolas',
      usuario: 'NicolasRMarques'
   },{
      nome:'Leonardo Ap',   
      usuario:'LeonardoAp96'   
   },{
      nome: 'Sophia',
      usuario: 'sophiafmartins'
   }
  ]

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