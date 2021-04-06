import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public produtos =[
    {nome:"X-Radiação",
     valor: 25.00
    },
    {nome: "Cherno & Byl´s",
     valor: 30.00
    },
    {nome: "Celsio 137",
     valor: 28.00
    }
  ]

  public todosProdutos: any;
  public busca= "";

  constructor() { 
    this.todosProdutos = this.produtos;
  }

  public filtrarProdutos(prod: any){
    let value = prod.target.value;
    if(value && value.trim() != ""){
      this.produtos = _.values(this.todosProdutos);
      this.produtos = this.produtos.filter((produto) => {
        return(produto.nome.toLowerCase().indexOf(value.toLowerCase()) > -1)
      })
    } else {
      this.produtos = this.todosProdutos;
    }
  }

  ngOnInit() {
  }

}
