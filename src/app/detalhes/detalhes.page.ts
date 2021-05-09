import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface User {
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
  type:                string;
  site_admin:          boolean;
  name:                string;
  company:             null;
  blog:                string;
  location:            string;
  email:               null;
  hireable:            null;
  bio:                 string;
  twitter_username:    null;
  public_repos:        number;
  public_gists:        number;
  followers:           number;
  following:           number;
  created_at:          Date;
  updated_at:          Date;
}


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage{

  public user: User;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { 
    const user = route.snapshot.paramMap.get('user');
    this.loadUser(user);

  }

  private async loadUser(user: String){
    const url = 'https://api.github.com/users/' + user;
    this.user = await this.http.get<User>(url).toPromise();
  }

}
