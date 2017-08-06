import Step from "./step";
import {User} from "./user";

export class Instruction {
  id: number;
  title: string;
  userLogin: string;
  //TODO: tag
  userId: number;
  step: Step[];

}
