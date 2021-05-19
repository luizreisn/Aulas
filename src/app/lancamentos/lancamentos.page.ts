import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistaLancamentos } from '../models/ArtistaLancamentos';
import { MusicasService } from '../services/musicas.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage {

  public result: ArtistaLancamentos = null;

  constructor(private musicasService: MusicasService,
              private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('id')
    this.getLancamentos(id);
  }

  private async getLancamentos(id: string){
    this.result = await this.musicasService.pegarLancamento(id);
  }

}
