import {Http, RequestOptions} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (()=>JSON.parse(localStorage.getItem('currentUser')).token.split(' ')[1]),
    headerPrefix: 'Bearer',
    globalHeaders: [{'Content-Type': 'application/json'}],
    headerName: 'Authorization',
    noJwtError: true
  }), http, options);
}
