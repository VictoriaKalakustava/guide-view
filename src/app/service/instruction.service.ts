import {Injectable} from "@angular/core";
import {CoreService} from "./core/core.service";
import {Instruction} from "../entity/instruction";
import {Response, Http} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import {AuthenticationService} from "./authentication.service";
import Tag from "../entity/tag";
import {MyComment} from "../entity/comment";

@Injectable()
export class InstructionService extends CoreService {


  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private authenticationService: AuthenticationService) {
    super();
  }

  addInstruction(instruction: Instruction) {
    return this.authHttp.post(`${this.webServiceEndpoint}/instruction/add`, instruction)
      .map((response: Response) => response);
  }

  addTag(comment: MyComment) {
    console.log("add tag service");
    return this.authHttp.post(`${this.webServiceEndpoint}/instruction/add/comment`, comment)
      .map((response: Response) => response.json());
  }

  getById(id: number) {
    console.log("get instruction  service");
    return this.authHttp.post(`${this.webServiceEndpoint}/instruction/get`, id)
      .map((response: Response) => response.json());
  }

  getComments(id: number) {
    console.log("get instruction  service");
    return this.authHttp.post(`${this.webServiceEndpoint}/instruction/get/comment`, id)
      .map((response: Response) => response.json());
  }

  getInstructionById(id: number){
    return this.authHttp.get(`${this.webServiceEndpoint}/instruction/get/` + id)
      .map((response: Response) => response.json())
  }
}
