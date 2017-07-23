import {Injectable} from '@angular/core';
import {User} from '../entity/user';
import {CoreService} from './core/core.service';
import {AuthHttp} from 'angular2-jwt';

import 'rxjs/add/operator/map';
import {Response} from '@angular/http';

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

  signUp(user : User) {
    console.log('signup');
    return this.authHttp.post(`${this.webServiceEndpoint}/sign-up`, user)
      .map((response: Response) => response);
  }
}
