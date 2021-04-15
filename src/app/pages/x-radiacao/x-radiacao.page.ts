import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

interface Produto{
  nome: string;
  descricao: string;
  valor: number;
  link: string;
  imagem: string;
  condimentos: {
    nome: string;
    marcado: boolean;
  }[];
}

@Component({
  selector: 'app-x-radiacao',
  templateUrl: './x-radiacao.page.html',
  styleUrls: ['./x-radiacao.page.scss'],
})
export class XRadiacaoPage implements OnInit {

  public produtos: Produto=
    {nome:"X-Radiação",
     descricao:"Hamburguer diretamente de chernobyl, radiação pura, contém pão, hamburger bolvino, cheddar, maionese verde, cebola caramelizada, bacon e nosso molho especial.",
     valor: 25.00,
     link: "/x-radiacao",
     imagem: "/assets/img/X-Radiacao.png",
     condimentos: [
       {nome: "Sem Cheddar", marcado: false },
       {nome: "Sem Maionese Verde", marcado: false},
       {nome: "Sem Cebola Caramelizada", marcado: false},
       {nome: "Sem Bacon", marcado: false},
       {nome: "Sem Molho Especial", marcado: false}
     ]
    }

    public quantidade = 0;
    public valor = 0;

  constructor(public rota: Router) { }

  ngOnInit() {
  }

  public adicionar(){
    this.quantidade++;
    this.atualizarValor();
  }

  public retirar(){
    if(this.quantidade <= 0){
      return;
    }else{
      this.quantidade--;
      this.atualizarValor();
    }
  }

  public atualizarValor(){
    this.valor = this.produtos.valor * this.quantidade
  }

  public adicionarProdutos(){
    console.log("Lanche: ", this.produtos.nome)
    console.log("Valor Unitario: ", this.produtos.valor)
    console.log("Personalização: ", this.produtos.condimentos.filter(condimentos => condimentos.marcado == true))
    console.log("Quantidades: ", this.quantidade)
    console.log("Valor Total: ", this.valor)
    this.rota.navigate(["home"]);
  }

}
