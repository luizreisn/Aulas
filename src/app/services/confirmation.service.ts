import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private alert: AlertController) { }

  async showModal(handlerFunction : () => void){
    const alert = await this.alert.create({
      header: 'Tem certeza?',
      message: 'Essa ação não poderá ser desfeita',
      buttons: [
        {
          text: 'Ok',
          handler: handlerFunction 
        },
        'Cancel'
      ]
    });
    alert.present()
  }
}
