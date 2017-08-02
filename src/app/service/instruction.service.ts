import {Injectable} from "@angular/core";
import {CoreService} from "./core/core.service";
import {Instruction} from "../entity/instruction";
import {Response, Http} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class InstructionService extends CoreService {


  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private authenticationService: AuthenticationService) {
    super();
  }

  addInstruction(instruction: Instruction) {
    console.log("add instruction service");
    return this.http.post(`${this.webServiceEndpoint}/instruction/add`, instruction)
      .map((response: Response) => response);
  }
}
