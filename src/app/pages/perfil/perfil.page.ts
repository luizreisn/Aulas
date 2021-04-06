import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  public perfil={
    nome: "",
    cpf: null,
    celular: null,
    sexo: "",
    nascimento: null,
    email: "",
    senha: null
  }

  constructor() { }

  ngOnInit() {
  }

  public atualizarPerfil(){
    console.log('Nome: ', this.perfil.nome)
    console.log('CPF: ', this.perfil.cpf)
    console.log('Celular: ', this.perfil.celular)
    console.log('Sexo: ', this.perfil.sexo)
    console.log('Nascimento: ', this.perfil.nascimento)
    console.log('Email: ', this.perfil.email)
    console.log('Senha: ', this.perfil.senha)
  }

}
