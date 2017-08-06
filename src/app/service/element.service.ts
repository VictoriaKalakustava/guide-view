import {CoreService} from "./core/core.service";
import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {Response} from "@angular/http";
import {StepElement} from "../entity/element";

@Injectable()
export class ElementService extends CoreService {

  private stepElement: StepElement;

  constructor(private authHttp: AuthHttp) {
    super();
  }

  saveElement(stepElement: StepElement){
    return this.authHttp.post(`${this.webServiceEndpoint}element/set-element`,JSON.stringify(stepElement))
      .map((response: Response) => { return response.json()});
  }
}
