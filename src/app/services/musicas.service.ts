import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistaBusca } from '../models/ArtistaBusca';
import { ArtistaLancamentos } from '../models/ArtistaLancamentos';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private http: HttpClient) { }

  public buscarArtista(busca: string){
    const url = `//musicbrainz.org/ws/2/artist/?query=${busca}&fmt=json`
    return this.http.get<ArtistaBusca>(url).toPromise();
  }

  public pegarLancamento(id: string){
    const url = `//musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`
    return this.http.get<ArtistaLancamentos>(url).toPromise();
  }

}