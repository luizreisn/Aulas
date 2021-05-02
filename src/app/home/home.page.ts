import { Component } from '@angular/core';
import { ConfirmationService } from '../services/confirmation.service';
import { MathService } from '../services/math.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private math: MathService,
              private confirmacao: ConfirmationService) {}

  public async onClick(){
    this.confirmacao.showModal(() => console.log(this.math.add(2,2)))
  }

}