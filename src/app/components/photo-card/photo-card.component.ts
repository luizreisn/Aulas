import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent{

  @Input() post;
  public usado = false;

  public toggleLike(post){
    this.usado = true;
    post.curtido = !post.curtido
  }

}
