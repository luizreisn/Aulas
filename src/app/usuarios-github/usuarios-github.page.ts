import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface UserGithub {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                'User';
  site_admin:          boolean;
}

@Component({
  selector: 'app-usuarios-github',
  templateUrl: './usuarios-github.page.html',
  styleUrls: ['./usuarios-github.page.scss'],
})
export class UsuariosGithubPage {

  usersGit: UserGithub[];

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private async loadUsers(){
    const url = 'https://api.github.com/repos/mcf1110/ionic-anhembi-2021.1/stargazers'
    this.usersGit = await this.http.get<UserGithub[]>(url).toPromise();
  }

}
