import { Component, OnInit } from '@angular/core';
import { Musica, MusicaService } from '../services/musica.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.page.html',
  styleUrls: ['./musicas.page.scss'],
})
export class MusicasPage{

  public musicas: Musica[] = this.musica.musicas;

  constructor(private musica: MusicaService) { }

}
