import {Injectable} from '@angular/core';
import {User} from '../entity/user';
import {CoreService} from './core/core.service';

import 'rxjs/add/operator/map';
import {Response, Headers, Http, RequestOptions} from '@angular/http';
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs/Observable";
import {AuthHttp} from "angular2-jwt";
import Step from "../entity/step";

@Injectable()
export class StepService extends CoreService {

  private step: Step;

  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private authenticationService: AuthenticationService) {
    super();
  }
  getStep(id: number) {
    console.log("getStepService");
    let body = {id: id};
    console.log(body);
    return this.authHttp.post(`${this.webServiceEndpoint}step/get-by-id`, JSON.stringify({ id: id}))
      .map((response: Response) => response.json());
  }
  // getStep(id: number) {
  //   console.log("getStepService");
  //   return this.authHttp.get(`${this.webServiceEndpoint}step/get-by-id`)
  //     .map((response: Response) => response.json());
  // }
}
