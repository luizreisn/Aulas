import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface User {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}

export interface Address {
  street:  string;
  suite:   string;
  city:    string;
  zipcode: string;
  geo:     Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name:        string;
  catchPhrase: string;
  bs:          string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage{

  users: User[];

  constructor(private http: HttpClient) { 
    this.loadUsers();
  }

  private async loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    this.users = await this.http.get<User[]>(url).toPromise();
  }

}
