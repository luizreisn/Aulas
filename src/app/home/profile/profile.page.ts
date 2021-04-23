import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public nColunas: 3 | 1 = 3;

  public posts = [
    {
      id: 34,
      curtido: true,
      user: 'luizreisn',
      descricao: 'Foto legal'
    },{
      id: 76,
      curtido: false,
      user: 'luizreisn',
      descricao: 'Foto media'
    },{
      id: 12,
      curtido: true,
      user: 'luizreisn',
      descricao: 'Foto ruim'
    },{
      id: 78,
      curtido: false,
      user: 'luizreisn',
      descricao: 'Foto mais ou menos'
    },{
      id: 90,
      curtido: true,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 70,
      curtido: true,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 30,
      curtido: true,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 50,
      curtido: true,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 5,
      curtido: true,
      user: 'luizreisn',
      descricao: 'Foto boa'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
