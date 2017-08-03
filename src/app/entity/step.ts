import {Element} from "./element";
import {Instruction} from "./instruction";
import {element} from "protractor";

export default class Step {
  public id: number;
  public title: string;
  public containers: Element[];
  public instructionId: number;
  public position: number;
  public instruction: Instruction;

  constructor(title: string, instructionId: number, position: number){
    this.id = 0;
    this.title = title;
    this.instruction = new Instruction;
    this.instructionId = instructionId;
    this.position = position;
    this.containers= [];
  }
}
