import { Component } from '@angular/core';

interface Tarefa { //criando um tipo Tarefa que tem as propriedades
  nome: string;
  feita: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tarefas: Tarefa[] = [] //criando uma lista de tarefas que tera objetos Tarefa
  public novaTarefa = '';

  constructor() {}

  public adicionarTarefa(){
    if(this.novaTarefa.trim().length == 0){ //verifica se o tamanho da string é igual a 0 se for retorna, a função trim tira os espaços vazios
      return;
    }
    this.tarefas.push({ //push: adiciona ao fim de uma lista um objeto novo
      nome: this.novaTarefa.trim(),
      feita: false
    })
    this.novaTarefa = ''; //zera o input depois de clicar o botao
  }

}