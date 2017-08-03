import {Component} from '@angular/core';
import Step from "../../../entity/step";
import {InstructionpagepreComponent} from "../../InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component";
import {Instruction} from "../../../entity/instruction";
import {User} from "../../../entity/user";
import {InstructionService} from "../../../service/instruction.service";

@Component({
  selector: 'add-instruction-component',
  templateUrl: './add.instruction.component.html',
  styleUrls: ['./add.instruction.component.css', '../../InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component.css'],
})

export class AddInstructionComponent{
  instruction: Instruction = new Instruction();
  newTag: string;

  addTag() {
    console.log(this.newTag);
    console.log(this.instruction);
  }
  containers: Step[];
  constructor(private instructionService: InstructionService) {
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

  save() {
    console.log(this.instruction);
    this.instructionService.addInstruction(this.instruction).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
