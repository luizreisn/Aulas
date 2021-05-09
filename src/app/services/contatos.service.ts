import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Contato{
  nome: string;
  usuario: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  public contatos: Contato[] = [
    //{ nome: 'Luiz Reis', usuario: 'luizreisn'},
    //{ nome: 'Carolina', usuario: 'sushiland'},
    //{ nome: 'Karine', usuario: 'kaf135'},
    //{ nome: 'João Pedro', usuario: 'jpssantiago'},
    //{ nome: 'Beatriz', usuario: 'BeatrizMarcos'},
   // { nome: 'Luccas', usuario: 'itsLuccas'},
   // { nome: 'Nícolas', usuario: 'NicolasRMarques'},
    //{ nome:'Leonardo Ap', usuario:'LeonardoAp96'},
    //{ nome: 'Sophia', usuario: 'sophiafmartins'}
  ]

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }

  public addContato(novoContato: Contato){
    this.contatos.push(novoContato);
    this.saveAtStorage();
  }

  public atualizarContato(velhoUsuario: String, atualizadoContato: Contato){
    const index = this.contatos.findIndex(c => c.usuario === velhoUsuario);
    this.contatos[index] = atualizadoContato;
    this.saveAtStorage();
  }

  public encontreContatoPorUsuario(usuario: string){
    return { ...this.contatos.find(c => c.usuario === usuario)};
  }

  private async loadFromStorage(){
    const loadedContatos: Contato[] | null = await this.storage.get('contatos')
    if(loadedContatos){
      this.contatos.push(...loadedContatos)
    }
  }

  private saveAtStorage(){
    this.storage.set('contatos', this.contatos)
  }
}
