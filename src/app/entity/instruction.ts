import Step from "./step";
import {User} from "./user";
import Tag from "./tag";

export class Instruction {
  id: number;
  title: string;
  //TODO: tag
  userLogin: string;
  userId: number;
  step: Step[];
  tags: Tag[];
}
