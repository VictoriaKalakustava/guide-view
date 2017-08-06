import Step from "./step";
import {User} from "./user";

export class Instruction {
  id: number;
  title: string;
  //TODO: tag
  userLogin: string;
  userId: number;
  step: Step[];

}
