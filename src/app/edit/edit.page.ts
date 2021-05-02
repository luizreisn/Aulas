import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Musica, MusicaService } from '../services/musica.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage{

  public musica: Musica;

  constructor(route: ActivatedRoute, 
              private musicaService: MusicaService,
              private nav: NavController) { 
    const id = +route.snapshot.paramMap.get('id');
    this.musica = musicaService.getMusicaId(id);
  }

  public atualizar(){
    this.musicaService.atualizarMusica(this.musica);
    this.nav.back()
  }

  public deletar(){
    this.musicaService.excluirMusica(this.musica.id);
    this.nav.back();
  }

}
