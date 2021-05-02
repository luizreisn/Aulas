import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/home/home.page';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  @Input() contato: Contato;
  @Output() salvado = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
