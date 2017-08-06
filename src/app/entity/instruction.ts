import Step from "./step";
import {User} from "./user";

export class Instruction {
  id: number;
  title: string;
  //TODO: tag
  steps: Step[];
  userId: number;
  userLogin: string;
}
