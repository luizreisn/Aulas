import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public productId: number;

  constructor(route: ActivatedRoute) { 
    this.productId = +route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
