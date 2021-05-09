import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contato, ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage{

  public contato: Contato;
  private usuario: string;

  constructor(route: ActivatedRoute,
              private contatoService: ContatosService,
              private nav: NavController) {
    this.usuario = route.snapshot.paramMap.get('usuario');
    this.contato = this.contatoService.encontreContatoPorUsuario(this.usuario)
  }

  editarContato(){
    this.contatoService.atualizarContato(this.usuario, this.contato)
    this.nav.back();
  }

}
