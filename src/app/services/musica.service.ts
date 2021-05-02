import { Injectable } from '@angular/core';

export interface Musica{
  id: number;
  artista: string;
  titulo: string;
  favorito: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  public musicas: Musica[] = [
    { id: 1, artista: 'Anitta', titulo: 'Girl From Rio', favorito: true},
    { id: 2, artista: 'Jão', titulo: 'Amor Pirata', favorito: true},
    { id: 3, artista: 'Lil Nas X', titulo: 'MONTERO', favorito: false},
    { id: 4, artista: 'Cardi B', titulo: 'Up', favorito: false},
    { id: 5, artista: 'Anitta', titulo: 'Me Gusta', favorito: true},
    { id: 6, artista: 'Dua Lipa', titulo: 'We´re Good', favorito: false},
    { id: 7, artista: 'Gloria Groove', titulo: 'Radar', favorito: true},
    { id: 8, artista: 'Pabllo Vittar', titulo: 'Bandida', favorito: false},
    { id: 9, artista: 'Sam Smith', titulo: 'Diamonds', favorito: false},
    { id: 10, artista: 'Beyoncé', titulo: 'Formation', favorito: true},
  ]

  public getMusicaId(id: number){
    return {... this.musicas.find(m => m.id === id) };
  }

  public atualizarMusica(musicaAtualizada: Musica){
    const index = this.musicas.findIndex(m => m.id === musicaAtualizada.id);
    this.musicas[index] = musicaAtualizada;
  }

  constructor() { }
}
