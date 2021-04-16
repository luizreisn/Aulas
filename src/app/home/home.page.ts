import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

interface Resultado {
  titulo: string;
  descricao: string;
  img: string;
}

interface Questao {
  texto: string;
  opcao: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultados: Resultado[] = [
    {
      titulo: 'DOTA 2',
      descricao: 'Um jogo online em que você passa pouca raiva, contanto que ninguém picke Pudge ou Techies na ranked. Melhor que LOL.',
      img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png'
    },
    {
      titulo: 'Counter-Strike: Global Offensive',
      descricao: 'Um jogo que a Valve se importa tanto que deixou bug rolar em campeanato e ficou de boa. 1.6 era melhor.',
      img: 'https://img.ibxk.com.br/2021/04/13/cs-go-13181322525349.png'
    },
    {
      titulo: 'Dark Souls',
      descricao: 'Um jogo pra relaxar.',
      img: 'https://cdn.awsli.com.br/600x700/1610/1610163/produto/62282768/poster-dark-souls-3-b-2159bacc.jpg'

    },
    {
      titulo: 'Sonic',
      descricao: 'Por incrível que pareça, às vezes é mais estressante que Dark Souls.',
      img: 'https://poltronanerd.com.br/wp-content/uploads/2020/09/Sonic.png'
    }
  ]

  public questoes: Questao[] = [
    {
      texto: 'Qual gênero de jogo você gosta mais?',
      opcao: ['MOBA', 'FPS', 'RPG', 'Plataforma']
    },
    {
      texto: 'Qual plataforma de jogo você gosta mais?',
      opcao: ['PC', 'PS5', 'XBox', 'Switch']
    },
    {
      texto: 'Qual ambientação você gosta mais?',
      opcao: ['Fantasia', 'Realismo', 'Medieval', 'Pixel Art']
    },
  ]

  public pontuacao = [0, 0, 0, 0];
  public qualQuestao = 0;
  public questaoSelecionada = null;
  public resultadoIndex;

  constructor(private toast: ToastController,
              private alerta: AlertController) { }

  public proximaQuestao() {
    this.pontuacao[this.questaoSelecionada]++;
    this.qualQuestao++;
    this.questaoSelecionada = null;
    this.showToast();
    if (this.qualQuestao >= this.questoes.length) { //terminei
      this.calcularResultado();
    }
  }

  public async confirmaReset(){
    const alerta = await this.alerta.create({
      header: 'Tem certeza?',
      message: 'o seu resultado será perdido para sempre !!',
      buttons: [
        'Cancelar',
        {
          text: 'Resetar Teste',
          handler: () => this.resetar()
        }
      ]
    })
    alerta.present();
  }

  private resetar(){
    this.qualQuestao = 0;
    this.pontuacao = [0, 0, 0, 0];
  }


  private calcularResultado() {
    const maxScore = Math.max(...this.pontuacao);
    this.resultadoIndex = this.pontuacao.findIndex(s => s === maxScore);
  }

  private async showToast(){
    const toast = await this.toast.create({
      message: `${this.qualQuestao} de ${this.questoes.length} respondidas`,
      duration: 1000
    })
    toast.present();
  }

}