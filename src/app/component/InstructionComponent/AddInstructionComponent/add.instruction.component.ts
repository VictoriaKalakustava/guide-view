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
    this.instruction.userId = 1;
    this.instruction.steps = this.containers;
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
