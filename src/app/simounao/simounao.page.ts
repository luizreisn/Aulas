import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface YesNo{
  answer: string;
  forced: boolean;
  image: string;
}

@Component({
  selector: 'app-simounao',
  templateUrl: './simounao.page.html',
  styleUrls: ['./simounao.page.scss'],
})
export class SimounaoPage{

  public yesno: YesNo;

  constructor(private http: HttpClient) { }

  public async getAnswer(){
    this.yesno = await this.http.get<YesNo>('https://yesno.wtf/api/').toPromise();
  }

}
