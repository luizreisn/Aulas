import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Contato, ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage{

  public novoContato: Contato = {
    nome: '',
    usuario: ''
  }

  constructor(private contatoService: ContatosService,
              private nav: NavController) { }

  adicionarContato(){
    this.contatoService.addContato(this.novoContato);
    this.nav.back();
  }

}
