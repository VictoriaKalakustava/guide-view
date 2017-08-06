import {AuthHttp} from "angular2-jwt";
import {CoreService} from "../core/core.service";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";

@Injectable()
export class SearchService extends CoreService {

  constructor(private authHttp: AuthHttp) {
    super();
  }

  search(searchParam: string){
    return this.authHttp.post(`${this.webServiceEndpoint}search`,JSON.stringify(searchParam))
      .map((response: Response) => { return response.json()});
  }
}
