import { Component } from '@angular/core';
import {Contato} from '../home/home.page'

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

  constructor() { }

  adicionarContato(){
    console.log('Salvando ', this.novoContato)
  }

}
