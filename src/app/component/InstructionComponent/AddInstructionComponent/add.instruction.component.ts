import {Component, Output, EventEmitter} from '@angular/core';
import {Response} from '@angular/http';
import Step from "../../../entity/step";
import {InstructionpagepreComponent} from "../../InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component";
import {Instruction} from "../../../entity/instruction";
import {User} from "../../../entity/user";
import {InstructionService} from "../../../service/instruction.service";
import {RouterShareService} from "../../../service/router.share.service";

@Component({
  selector: 'add-instruction-component',
  templateUrl: './add.instruction.component.html',
  styleUrls: ['./add.instruction.component.css', '../../InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component.css'],
})

export class AddInstructionComponent {
  instruction: Instruction = new Instruction();
  newTag: string;
  titleStep: string;
  positionStep: number;
  @Output() addInst: EventEmitter<any> = new EventEmitter();

  addTag() {
    console.log(this.newTag);
    console.log(this.instruction);
  }

  containers: Step[];


  constructor(private instructionService: InstructionService,
              private  routershareService: RouterShareService) {
    console.log("constructor");
    this.containers = [];
    this.containers.push(new Step('Step title', 1, 1));
    console.log("n init " + this.containers);
  }

  save() {
    console.log(this.instruction);
    return this.instructionService.addInstruction(this.instruction).map((response: Response) => response.json())
  }

  getTitleInst() {
    this.instruction.userId = JSON.parse(localStorage.getItem('currentUserData')).id;
    this.save().subscribe(
      data => {
        this.instruction.id = data.id;
        console.log('inst saved ' + this.instruction.id);
        //this.addInst.emit(JSON.stringify(this.instruction));
        },
      error => { console.log('Error in getTitleInstruction.');
      });
    this.routershareService.object = this.instruction;
    //this.routershareService.titleStep = this.titleStep;
    this.routershareService.position = 1;
    console.log(this.routershareService);
    //localStorage.setItem('currentInst',JSON.stringify(this.instruction));
  }
}
