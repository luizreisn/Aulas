import { Component, OnInit } from '@angular/core';

interface Produto{
  nome: string;
  descricao: string;
  valor: number;
  link: string;
}

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  public pesquisa="";
  public produtosCarne: Produto[]=[
    {nome:"X-Radiação",
     descricao:"Hamburguer diretamente de chernobyl, radiação pura, contém pão, hamburger ...",
     valor: 25.00,
     link: "/x-radiacao"
    },
    {nome: "Cherno & Byl´s",
     descricao: "Como o proprio nome diz, nosso carro chefe, é um verdadeiro monstro...",
     valor: 30.00,
     link: "/x-radiacao"
    },
    {nome: "Celsio 137",
     descricao: "Nosso monstro Brasileiro, verdadeiramente delicioso, contém pão francês...",
     valor: 28.00,
     link: "/x-radiacao"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
