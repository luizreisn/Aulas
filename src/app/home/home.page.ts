import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public alertCtrl: AlertController;

  constructor(ac: AlertController) {
    this.alertCtrl = ac;
  }

  public showAlert(){
    const alert = this.alertCtrl.create({
      header: 'Ola Mundo',
      message: 'Esse é o meu primeiro Alerta',
      buttons: ['Ok', 'Beleza', 'Falou']
    }).then(function(alert){
      alert.present();
    })
  }

  public async showAlert2(){
    const alert = await this.alertCtrl.create({
      header: 'Ola Mundo',
      message: 'Esse é o meu segundo Alerta',
      buttons: ['Ok', 'Beleza', 'Falou']
    })
      alert.present();
  }

  public async showAlert3(){
    const alert = await this.alertCtrl.create({
      header: 'Tem certeza?',
      message: 'Essa operação não pode ser desfeita.',
      buttons: [{
        text: 'Ok',
        handler: () => console.log('clicou em OK')
      },{
        text: 'Cancelar',
        handler: function(){
          console.log('clicou em Cancelar')
        }
      }]
    })
      alert.present();
  }



}