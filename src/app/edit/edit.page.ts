import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Musica, MusicaService } from '../services/musica.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage{

  public musica: Musica;

  constructor(route: ActivatedRoute, private musicaService: MusicaService) { 
    const id = +route.snapshot.paramMap.get('id');
    this.musica = musicaService.getMusicaId(id);
  }

  public atualizar(){
    this.musicaService.atualizarMusica(this.musica);
  }

}
