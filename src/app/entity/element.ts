
import Step from "./step";

export class StepElement {
  public id: number
  public position: number;
  public type: string;
  public value: string;
  public stepId: number;
  public step: Step;

  constructor(){
  this.id = 0;
  this.position  = 0;
  this.type = '';
  this.value = '';
  this.stepId = 0;
  }
}

