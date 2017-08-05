import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {CoreService} from "./core/core.service";

@Injectable()
export class AuthenticationService extends CoreService{
  public token: string;
  constructor(private http: Http) {
    super();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this.webServiceEndpoint}login`, JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        let token = response.headers.get('Authorization');
        if (token) {
          this.token = token;
          //TODO make processing exception
          localStorage.setItem('currentUser', JSON.stringify({
            username: username,
            token: token,
          }));
          return true;
         }
          return false;})
          .catch(e => {
          if (e.status === 401) {
            return Observable.throw('Unauthorized');
          }
        });

  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
