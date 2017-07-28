import {Injectable} from '@angular/core';
import {User} from '../entity/user';
import {CoreService} from './core/core.service';

import 'rxjs/add/operator/map';
import {Response, Headers, Http, RequestOptions} from '@angular/http';
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService extends CoreService {

  private user: User = new User();

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
    super();
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('/api/users', options)
      .map((response: Response) => response.json());
  }

  isExistLogin(login: String) {
    return this.http.post(`${this.webServiceEndpoint}/sign-up/login/is-exist`, login)
      .map((response: Response) => response);
  }

  signUp(user: User) {
    console.log('signup');
    return this.http.post(`${this.webServiceEndpoint}/sign-up`, user)
      .map((response: Response) => response);
  }

  updateProfile(user: User) {
    console.log('update');
    return this.http.post(`${this.webServiceEndpoint}/update-user`, user)
      .map((response: Response) => response);
  }

  getProfileByLogin(login: String) {
    console.log('it\'s get profile ');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Accept-Encoding', 'gzip, deflate');
    return this.http.get(`${this.webServiceEndpoint}/update-user?login=` + login);
  }
}
