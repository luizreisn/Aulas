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
  public focar= 0;  

  public produtos=[
    {nome:"X-Radiação",
     valor: 25.00,
     link: ""
    },
    {nome: "Cherno & Byl´s",
     valor: 30.00,
     link: ""
    },
    {nome: "Celsio 137",
     valor: 28.00,
     link: ""
    }
  ]

  public produtosFiltrados = this.produtos;

  constructor(public rota: Router,
              public alerta: AlertController) { }

  ngOnInit() {
  }

  public buscar(ev: CustomEvent){
    let val = ev.detail.value;
    if(val && val.trim() !== ''){
      this.produtosFiltrados = this.produtos.filter(term => 
      term.nome.toLocaleLowerCase().indexOf(val.toLocaleLowerCase().trim()) > -1)
    }else{
      this.produtosFiltrados = this.produtos;
    }
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
