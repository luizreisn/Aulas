import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-trocar-endereco',
  templateUrl: './trocar-endereco.page.html',
  styleUrls: ['./trocar-endereco.page.scss'],
})
export class TrocarEnderecoPage implements OnInit {

  public enderecoTroca={
    cep: null,
    endereco:  "",
    numero: null,
    complemento: ""
  }

  constructor(public rota: Router) { }
  
  ngOnInit() {
  }

  public confirmar(){
    console.log('CEP: ' ,this.enderecoTroca.cep);
    console.log('Endereço: ' ,this.enderecoTroca.endereco);
    console.log('Numero: ' ,this.enderecoTroca.numero);
    console.log('Complemento: ' ,this.enderecoTroca.complemento);
    this.rota.navigate(["home"])
    
  }


}
