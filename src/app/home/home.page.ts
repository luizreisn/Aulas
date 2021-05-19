import { Component } from '@angular/core';
import { ArtistaBusca } from '../models/ArtistaBusca';
import { MusicasService } from '../services/musicas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public termoBusca: '';

  public result: ArtistaBusca = null

  constructor(private musicaService: MusicasService) {}

  public async busca(){
    this.result = await this.musicaService.buscarArtista(this.termoBusca)
  }

}