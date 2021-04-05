import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

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

  constructor(public rota: Router) { }

  ngOnInit() {
  }

  public sair(){
    this.rota.navigate(["login"]);
  }

}
