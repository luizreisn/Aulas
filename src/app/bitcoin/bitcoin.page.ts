import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';

export interface BitCoin {
  bpi: Record<Code, Rate>;
}

export interface Rate {
  code: Code;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

type Code = "USD" | "GBP" | "EUR";

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage {

  public valor = null;
  public rates: Rate[];

  constructor(private http: HttpClient) { 
    this.loadRate();
  }

  private async loadRate(){
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const r = await this.http.get<BitCoin>(url).toPromise();
    this.rates = Object.values(r.bpi)
  }


}
