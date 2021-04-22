import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public posts = [
    {
      id: 22,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto legal'
    },{
      id: 7,
      curtido: false,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto media'
    },{
      id: 3,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto ruim'
    },{
      id: 78,
      curtido: false,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto mais ou menos'
    },{
      id: 45,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto boa'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public toggleLike(post){
    post.usado = true;
    post.curtido = !post.curtido
  }

}
