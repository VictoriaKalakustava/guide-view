import {StepElement} from "./element";
import {Instruction} from "./instruction";
import {element} from "protractor";

export default class Step {
  public id: number;
  public title: string;
  public elements: StepElement[];
  public instructionId: number;
  public position: number;


  constructor(title: string, instructionId: number, position: number){
    this.id = 0;
    this.title = title;
    this.instructionId = instructionId;
    this.position = position;
    this.elements= [];
  }
}
