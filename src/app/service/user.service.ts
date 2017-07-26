import {Injectable} from '@angular/core';
import {User} from '../entity/user';
import {CoreService} from './core/core.service';
import {AuthHttp} from 'angular2-jwt';

import 'rxjs/add/operator/map';
import {Response, Headers } from '@angular/http';

@Injectable()
export class UserService extends CoreService {
  private user: User = new User();

  constructor(private authHttp: AuthHttp) {
    super();
  }

  isExistLogin(login: String) {
    return this.authHttp.post(`${this.webServiceEndpoint}/sign-up/login/is-exist`, login)
      .map((response: Response) => response);
  }

  signUp(user: User) {
    console.log('signup');
    return this.authHttp.post(`${this.webServiceEndpoint}/sign-up`, user)
      .map((response: Response) => response);
  }

  updateProfile(user: User) {
    console.log('update');
    return this.authHttp.post(`${this.webServiceEndpoint}/update-user`, user)
      .map((response: Response) => response);
  }

  getProfileByLogin(login: String) {
    console.log('it\'s get profile ');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Accept-Encoding', 'gzip, deflate');
    return this.authHttp.get(`${this.webServiceEndpoint}/update-user?login=` + login);
  }
}
