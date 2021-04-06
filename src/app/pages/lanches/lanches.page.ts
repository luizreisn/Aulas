import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  public pesquisa="";
  public produtosCarne=[
    {nome:"X-Radiação",
     descricao:"Hamburguer diretamente de chernobyl, radiação pura, contém pão, hamburger ...",
     valor: 25.00
    },
    {nome: "Cherno & Byl´s",
     descricao: "Como o proprio nome diz, nosso carro chefe, é um verdadeiro monstro...",
     valor: 30.00
    },
    {nome: "Celsio 137",
     descricao: "Nosso monstro Brasileiro, verdadeiramente delicioso, contém pão francês...",
     valor: 28.00
    }
  ]

  constructor(public rota: Router) { }


  ngOnInit() {
  }

}
