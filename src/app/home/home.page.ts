import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { Contato, ContatosService } from '../services/contatos.service';
import {map, tap} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contatoStream: Observable<Contato[]>;

  public buscar = '';

  public buscaStream = new BehaviorSubject('');

  constructor(private modal: ModalController,
              private contatoService: ContatosService) {
    this.contatoStream = combineLatest([
      this.contatoService.contatosStream,
      this.buscaStream
    ]).pipe(
      map(realizarBusca),
      map(ordenarListaContatos)
    )
  }

  public async abrirModal(contatoSelecionado: Contato){
    const modal = await this.modal.create({
      component: DetailsModalComponent,
      componentProps: {
        contato: contatoSelecionado
      }
    });
    modal.present();
  }

  public atualizarBusca(){
    this.buscaStream.next(this.buscar)
  }

}

function ordenarListaContatos(cs: Contato[]): Contato[]{
  return [...cs].sort((c1, c2) => c1.nome.localeCompare(c2.nome))
}

function realizarBusca(v: [Contato[], string]): Contato[] {
  const [cs, busca] = v;
  return cs.filter(c => c.nome.includes(busca));
}
