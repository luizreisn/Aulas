import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-radiacao',
  templateUrl: './x-radiacao.page.html',
  styleUrls: ['./x-radiacao.page.scss'],
})
export class XRadiacaoPage implements OnInit {

  public produtos=
    {nome:"X-Radiação",
     descricao:"Hamburguer diretamente de chernobyl, radiação pura, contém pão, hamburger bolvino, cheddar, maionese verde, cebola caramelizada, bacon e nosso molho especial.",
     valor: 25.00,
     link: "/x-radiacao"
    }

  constructor() { }

  ngOnInit() {
  }

}
