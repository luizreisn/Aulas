import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contato } from '../home/home.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage{

  private contatos: Contato[] = [
    {
      nome: 'Luiz Reis',
      usuario: 'luizreisn'
    },{
      nome: 'Carolina',
      usuario: 'sushiland'
    },{
      nome: 'Karine',
      usuario: 'kaf135'
    },{
      nome: 'João Pedro',
      usuario: 'jpssantiago'
   },{
      nome: 'Beatriz',
      usuario: 'BeatrizMarcos'
   },{
      nome: 'Luccas',
      usuario: 'itsLuccas'
   },{
      nome: 'Nícolas',
      usuario: 'NicolasRMarques'
   },{
      nome:'Leonardo Ap',   
      usuario:'LeonardoAp96'   
   },{
      nome: 'Sophia',
      usuario: 'sophiafmartins'
   }
  ]

  public contato: Contato;

  constructor(private route: ActivatedRoute) {
    const usuario = route.snapshot.paramMap.get('usuario');
    this.contato = this.contatos.find(c => c.usuario === usuario);
  }

  editarContato(){
    console.log('Atualizando', this.contato)
  }

}
