import {Injectable} from '@angular/core';
import {User} from '../entity/user';
import {CoreService} from './core/core.service';

import 'rxjs/add/operator/map';
import {Response, Headers, Http, RequestOptions} from '@angular/http';
import {AuthenticationService} from "./authentication.service";
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
    return this.authHttp.get(`${this.webServiceEndpoint}step/get-by-id/1`)
      .map((response: Response) => response.json());
  }
  saveStep(step: Step){
    return this.authHttp.post(`${this.webServiceEndpoint}step/set-step`,JSON.stringify(step))
      .map((response: Response) => {return response.json()});
  }
  deleteStep(step: Step){
    console.log('this is delete step___' + JSON.stringify(step));
    return this.authHttp.post(`${this.webServiceEndpoint}step/del-step`,JSON.stringify(step))
      .map((response: Response)=>{return response.json()});
  }
}
