import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contador = {
    atual: 0,
    maximo: 0
  }
  public conta={
    atual: 0,
    input: null
  }

  public escolha ={
    de: "",
    para:""
  }
  
  public input={
    de: null,
    para: null
  }

  public contadorProf = {
    atual: 0,
    maximo: 0
  }

  constructor(private alerta: AlertController) {}

    public incrementar(){
      if(this.contador.atual == this.contador.maximo){
        this.contador.maximo ++;
        this.contador.atual ++;
      }else{
        this.contador.atual ++;
      }
    }

    public decrementa(){
      this.contador.atual --;
    }

    public async confirmarReset(){
      const alert = await this.alerta.create({
        header: 'Tem certeza?',
        message: 'Seu contador será resetado.',
        buttons:[
          {
            text: 'Resetar',
            handler: () => this.resetar()
          },
          'Cancelar'
        ]
      })
      alert.present()
    }

    private resetar(){
      this.contador.atual = 0,
      this.contador.maximo = 0;
    }

    public sacar(){
      if(this.conta.input > this.conta.atual){
        this.conta.atual = 0;
      }else{
        this.conta.atual -= this.conta.input;
      }
      this.conta.input = null;
    }

    public depositar(){
      this.conta.atual += this.conta.input;
      this.conta.input = null;
    }

    public async confirmarSacarTudo(){
      const alert = await this.alerta.create({
        header: 'Tem certeza?',
        message: 'Seu saldo será resetado.',
        buttons:[
          {
            text: 'Sacar Tudo',
            handler: () => this.sacarTudo()
          },
          'Cancelar'
        ]
      })
      alert.present()
    }

    public sacarTudo(){
      this.conta.atual = 0;
      this.conta.input = null;

    }

    public calcula(){
      
    }

    public incrementarProf(){
      this.contadorProf.atual++;
      this.contadorProf.maximo = Math.max(this.contadorProf.maximo, this.contadorProf.atual);
    }

    public decrementaProf(){
      this.contadorProf.atual --;
    }

    public resetarProf(){
      this.contadorProf.atual = 0,
      this.contadorProf.maximo = 0;
    }

    
}
