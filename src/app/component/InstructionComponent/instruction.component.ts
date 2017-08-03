import {Component} from '@angular/core';
import Step from "../../entity/step";
import {AddstepComponent} from "../StepComponent/AddStepComponent/addstep.component";


@Component({
  selector: 'instruction-component',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css', '../StepComponent/AddStepComponent/addstep.component.css'],
})

export class InstructionComponent {
  containers: Step[];

  constructor() {
    console.log("constructor");
    this.containers = [];
    /*this.containers.push(new Step("a", "a"));
    this.containers.push(new Step("b", "b"));
    this.containers.push(new Step("c", "c"));
    this.containers.push(new Step("d", "d"));
    this.containers.push(new Step("dasds", "a"));
    this.containers.push(new Step("1111b", "b"));
    this.containers.push(new Step("222c", "c"));
    this.containers.push(new Step("333d", "d"));
    this.containers.push(new Step("a", "a"));
    this.containers.push(new Step("b", "b"));
    this.containers.push(new Step("c", "c"));
    */this.containers.push(new Step("kke", 1,1));
    console.log("n init " + this.containers);
  }
}
