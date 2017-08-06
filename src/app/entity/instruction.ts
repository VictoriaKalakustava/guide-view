import Step from "./step";
import {User} from "./user";

export class Instruction {
  id: number;
  title: string;
  //TODO: tag
  userId: number;
  userLogin: string;
  step: Step[];

}
