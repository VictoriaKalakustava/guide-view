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


  getUser1() {
    console.log('User Service. getUser1');
    return this.authHttp.get(`${this.webServiceEndpoint}/test`)
      .map((response: Response) => response.json());
  }
}
