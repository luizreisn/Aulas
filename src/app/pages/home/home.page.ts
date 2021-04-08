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
  public focar= null;  

  constructor(public rota: Router,
              public alerta: AlertController) { }

  ngOnInit() {
  }

  public busca(){
    this.rota.navigate(["busca"])
  }

  public focado(){
    console.log(this.focar)
    this.focar = 1;
  }
  public desfocado(){
    console.log(this.focar)
    this.focar = 0;
  }

  public async sair() {
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
