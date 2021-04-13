import { Component } from '@angular/core';

//ex1
interface Tarefa { //criando um tipo Tarefa que tem as propriedades
  nome: string;
  feita: boolean;
}

//ex2
interface Transacao{
  valor: number;
  data: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //ex1
  public tarefas: Tarefa[] = [] //criando uma lista de tarefas que tera objetos Tarefa
  public tarefasFiltradas: Tarefa[] = this.tarefas; //a lista filtrada é uma copia da lista original porem sera filtrada conforme o filtro
  public novaTarefa = '';
  public progresso = 0;
  public selecionarFiltro: 'todas' | 'paraFazer' | 'feitas' = 'todas'; //separa os tipos de resultados que pode-se atribuir a essa variavel

  //ex2
  public valor = 0;
  public valorInput = null;

  public transacoes: Transacao[] = []

  constructor() {}

  //ex1
  public adicionarTarefa(){
    if(this.novaTarefa.trim().length == 0){ //verifica se o tamanho da string é igual a 0 se for retorna, a função trim tira os espaços vazios
      return;
    }
    this.tarefas.push({ //push: adiciona ao fim de uma lista um objeto novo
      nome: this.novaTarefa.trim(),
      feita: false
    })
    this.novaTarefa = ''; //zera o input depois de clicar o botao
  
    this.calcularProgesso();
    this.atualizarFiltro(); //quando criar uma tarefa atualizar a filtrada para sumir a tarefa de la tambem
  }

  public calcularProgesso(){
    //meu jeito
    /*let tarefasCompletas = 0;
    for(let tarefa of this.tarefas){ //percorre todas as tarefas
      if(tarefa.feita){//se a tarefa estiver completa 
        tarefasCompletas++; //soma um nas tarefas completas
      }
    }
    this.progresso = tarefasCompletas / this.tarefas.length*/ //o progessor sera o tamanho das tarefas completas divido pela quantidade de tarefas
  
    //jeito professor
    /*this.progresso = this.tarefas.filter(function(tarefa) => { //vai filtrar a lista de tarefas e chamar a funcao passando tarefa
      return tarefa.feita; //vai retornar apenas as tarefas que estao feitas
    }).length / this.tarefas.length*/ //divide as tarefas filtradas pelo tamanho da lista normal

    //jeito professor resumido
    this.progresso = this.tarefas.filter(tarefa => tarefa.feita).length / this.tarefas.length
  }

  public removerTarefa(remove: Tarefa){ //recebe uma tarefa como parametro
    const index = this.tarefas.indexOf(remove) //encontra o index da tarefa que foi passada a função 
    this.tarefas.splice(index, 1); // remove a tarefa a partir do index, o 1 significa que sera removido um elemento apenas
  
    this.atualizarFiltro(); //quando remover uma tarefa atualizar a filtrada para sumir a tarefa de la tambem
  }

  public atualizarFiltro(){
    if(this.selecionarFiltro == 'todas'){
      this.tarefasFiltradas = this.tarefas //so copia a lista de tarefas
    }else if(this.selecionarFiltro == 'feitas'){
      this.tarefasFiltradas = this.tarefas.filter(tarefa => tarefa.feita) //filtra as tarefas por um predicado
    }else{
      this.tarefasFiltradas = this.tarefas.filter(tarefa => !tarefa.feita)
    }
  }


  //ex2
  public gasto(){
    this.valor += this.valorInput;
    this.transacoes.unshift({ //coloca os novos elementos da lista na frente
      valor: this.valorInput,
      data: new Date()
    })
    this.valorInput = null;
  }

}