import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public aniversariante ={
    nome: "Luiz Gabriel",
    idade: 15,
    
  }
  public personagem ={
    jonSnow: false,
    aryaStark: false
  }

  public idade = null;
  public descricao = "";
  public termos = false;
  public metodoDePagamento = "";
  public dataDeNascimento = null;

  constructor() {}
  public aniversario(){
    this.aniversariante.idade++;
  }
}
