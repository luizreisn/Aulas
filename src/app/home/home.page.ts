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
      titulo: 'Gay',
      descricao: 'Você é uma poc mesmo hein bicha, adorei, bem vinda ao vale kerelho.',
      img: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      titulo: 'Bi',
      descricao: 'Bi Sexy Uau, não passa fome nunca porque come dos dois lados.',
      img: 'https://images.pexels.com/photos/6785046/pexels-photo-6785046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      titulo: 'Hetero',
      descricao: 'Eae parça, bora jogar uma e fazer uma brotheragem sem compromisso.',
      img: 'https://images.pexels.com/photos/5890067/pexels-photo-5890067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    },
    {
      titulo: 'Icognita',
      descricao: 'Você conseguiu bugar nosso sistema, mas provavelmente deve ser LGBTQIA+.',
      img: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  ]

  public questoes: Questao[] = [
    {
      texto: 'Você sente atração pelo sexo oposto ao seu?',
      opcao: ['Sim, obviooo', 'Pelos 2 sexos', 'Não, sai dae man', 'Não tenho certeza']
    },
    {
      texto: 'Você ja se sentiu atraido SEXUALMENTE pelo sexo oposto ao seu?',
      opcao: ['Sim, sempre', 'Pelos 2 Sexos', 'Não, nunca', 'Não tenho certeza']
    },
    {
      texto: 'Você ouve muita musica pop?',
      opcao: ['SIM meu estilo favorito', 'As vezes sim mas adoro um Funk tb', 'Que isso man, so ouço Funk +18', 'Não sei']
    },
    {
      texto: 'Conhece alguma diva pop?',
      opcao: ['Sim, todas','Algumas, só as mais famosas','Que isso?','Não tenho certeza']
    },
    {
      texto: 'Sabe alguma coreografia?',
      opcao: ['Sim, todas','Só algumas','Não faço ballet não','Não tenho certeza']
    }
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