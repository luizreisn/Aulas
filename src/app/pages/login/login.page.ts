import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, NgModel } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  public usuario={
    nome: "",
    telefone: null,
    nascimento: Date,
    sexo: "",
    email: "",
    senha: null
  }
  
  constructor(public carregando: LoadingController,
              public alerta: AlertController,
              public rota: Router) { }

  ngOnInit() {
  }

  public segmentChanged(event: any){
    if(event.detail.value == 'login'){
      this.slides.slidePrev();
    }else if(event.detail.value == 'cadastro'){
      this.slides.slideNext();
    }
    
  }

  public login(){
    console.log('email: ' ,this.usuario.email);
    console.log('senha: ' ,this.usuario.senha);
  }

  async alertaSenha() {
    const alert = await this.alerta.create({
      header: 'Digite o E-mail cadastrado',
      subHeader: 'Enviaremos um E-mail para redefinir sua senha.',
      inputs:[{
          name: 'email',
          type: 'email',
          placeholder : 'Digite seu E-mail'
        }
      ],
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },{
          text: 'Confirmar',
          handler: (alertData) => {
            console.log('email:', alertData.email);
          }
        }
      ]
    });

    await alert.present();
  }

  public cadastrar(){
    console.log('nome: ' ,this.usuario.nome);
    console.log('telefone: ' ,this.usuario.telefone);
    console.log('data de nascimento: ' ,this.usuario.nascimento);
    console.log('sexo: ' ,this.usuario.sexo);
    console.log('e-mail: ' ,this.usuario.email);
    console.log('senha: ' ,this.usuario.senha);
  }

  async carregar() {
    const loading = await this.carregando.create({
      message: 'Por favor aguarde ...',
      duration: 1000
    });
    await loading.present();
    this.rota.navigate(["home"]);
  }

}
