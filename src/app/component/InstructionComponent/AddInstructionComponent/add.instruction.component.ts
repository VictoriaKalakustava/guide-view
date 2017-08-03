import {Component} from '@angular/core';
import Step from "../../../entity/step";


@Component({
  selector: 'add-instruction-component',
  templateUrl: './add.instruction.component.html',
  styleUrls: ['./add.instruction.component.css', '../../StepComponent/AddStepComponent/addstep.component.css',
  '../instruction.component.css'],
})

export class AddInstructionComponent {
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
    this.containers.push(new Step("c", "c"));*/
    this.containers.push(new Step('asdasd', 1,1));
    console.log("n init " + this.containers);
  }
}
