import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    public estudante={
      nome: 'Luiz Gabriel',
      nota: 3
    }

    public provas=[
      {nome: 'Prova N1', nota: 6.8},
      {nome: 'Prova N2', nota: 8.9},
      {nome: 'Prova N3', nota: 7.0},
      {nome: 'Prova Final', nota: 6.9}
    ];

  constructor() {}
    public incrementa(){
      this.estudante.nota ++;
    }

    public entregas=[
      {nome: 'TV', 
       diasDesdeACompra: 7, 
       diasEstimadosEntrega: 8, 
       status: 'onRoute'},

      {nome: 'Nintendo Switch', 
       diasDesdeACompra: 15,
       diasEstimadosEntrega: 15,
       status: 'delivered'},

      {nome: 'JBL', 
       diasDesdeACompra: 6,
       diasEstimadosEntrega: 4,
       status: 'onRoute'},

      {nome: 'Máquina de Lavar',
       diasDesdeACompra: 2,
       diasEstimadosEntrega: 15,
       status: 'preparing'},
       
      {nome: 'MousePad',
       diasDesdeACompra: 4,
       diasEstimadosEntrega: 2,
       status: 'onRoute'}
    ]
}
