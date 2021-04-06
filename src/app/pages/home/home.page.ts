import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public endereco={
    endereco: "Seu Endereço",
    numero: null
  }
  public pesquisa = "";

  constructor(public rota: Router,
              public alerta: AlertController) { }

  ngOnInit() {
  }

  public busca(){
    this.rota.navigate(["busca"])
  }

  public trocarEndereco(){
    console.log('Endereco', this.endereco.endereco)
    console.log('numero:', this.endereco.numero)
    this.rota.navigate(["trocar-endereco"])
  }

  public perfil(){
    this.rota.navigate(["perfil"])
  }

  public lanches(){
    this.rota.navigate(["lanches"])
  }

  async sair() {
    const alert = await this.alerta.create({
      header: 'Deseja mesmo sair?',
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },{
          text: 'Sair',
          handler: (alertData) => {
            console.log('Confirm OK');
            this.rota.navigate(["login"]);
          }
        }
      ]
    });

    await alert.present();
  }

}
