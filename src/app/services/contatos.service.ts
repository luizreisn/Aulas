import { Injectable } from '@angular/core';

export interface Contato{
  nome: string;
  usuario: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  public contatos: Contato[] = [
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

  constructor() { }
}
