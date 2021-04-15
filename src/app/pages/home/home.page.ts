import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';

interface Produto{
  nome: string;
  valor: number;
  link: string;
}[]

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

  public produtos: Produto[]=[
    {nome:"X-Radiação",
     valor: 25.00,
     link: "/x-radiacao"
    },
    {nome: "Cherno & Byl´s",
     valor: 30.00,
     link: "/x-radiacao"
    },
    {nome: "Celsio 137",
     valor: 28.00,
     link: "/x-radiacao"
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
          handler: () => {
            console.log('Confirm Cancel');
          }
        },{
          text: 'Sair',
          handler: () => {
            console.log('Confirm OK'),
            this.rota.navigate(["login"]);
          }
        }
      ]
    });

    await alert.present();
  }

}
