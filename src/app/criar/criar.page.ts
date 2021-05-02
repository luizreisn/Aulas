import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Musica, MusicaService } from '../services/musica.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.page.html',
  styleUrls: ['./criar.page.scss'],
})
export class CriarPage{

  public novaMusica: Musica = {
    id: 0,
    artista: '',
    titulo: '',
    favorito: false
  }

  constructor(private musicaService: MusicaService,
              private nav: NavController){}

  public salvar(){
    this.musicaService.criarMusica(this.novaMusica);
    this.nav.back();
  }

}
