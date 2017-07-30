import {EntityPageInst} from "./entitypageinst";

export default class Step {
  title: String;
  containers: EntityPageInst[];

  constructor(title: string, type: string){
    this.title = title;
  }
}
