import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public posts = [
    {
      id: 34,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto legal'
    },{
      id: 76,
      curtido: false,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto media'
    },{
      id: 12,
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
      id: 90,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 70,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 30,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 50,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto boa'
    },{
      id: 5,
      curtido: true,
      usado: false,
      user: 'luizreisn',
      descricao: 'Foto boa'
    }
  ]

  public post;

  constructor(route: ActivatedRoute) {
    const postId: number = +route.snapshot.paramMap.get('photoId');
    this.post = this.posts.find(p => p.id === postId)
   }

  ngOnInit() {
  }

  public toggleLike(post){
    post.usado = true;
    post.curtido = !post.curtido
  }

}
