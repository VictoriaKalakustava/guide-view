import {Injectable} from "@angular/core";
import Step from "../entity/step";
import {Instruction} from "../entity/instruction";

@Injectable()
export class RouterShareService {

  objectElement: Element;
  objectStep: Step;
  objectInstruction: Instruction;
  containers: Step[];
  titleStep: string;
  position: number;
  isAdded = false;
  idInst = 0;
}
