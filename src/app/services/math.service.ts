import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public add(a: number, b: number){
    return a + 2 * b;
  }
}
