import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import Step from "../../../entity/step";
import {InstructionpagepreComponent} from "../../InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component";
import {Instruction} from "../../../entity/instruction";
import {User} from "../../../entity/user";
import {InstructionService} from "../../../service/instruction.service";
import {RouterShareService} from "../../../service/router.share.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'add-instruction-component',
  templateUrl: './add.instruction.component.html',
  styleUrls: ['./add.instruction.component.css', '../../InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component.css'],
})

export class AddInstructionComponent implements OnInit{
  instruction: Instruction = new Instruction();
  newTag: string;
  titleStep: string;
  titleInstruction: string;
  positionStep: number;
  containers: Step[];
  idValid: boolean;
  idInst: number;
  private isAdded: boolean;

  constructor(private route: ActivatedRoute,
              private instructionService: InstructionService,
              private routershareService: RouterShareService) {
    this.containers = [];
    this.idInst = null;
  }

  ngOnInit(){

      if(this.routershareService.isAdded) {
        this.titleInstruction = this.routershareService.objectInstruction.title;
        this.containers = this.routershareService.containers;
      }
      else this.routershareService.containers = [];
      if(this.routershareService.idInst) this.instruction.id = this.routershareService.idInst;
  }

  addTag() {
    console.log(this.newTag);
    console.log(this.instruction);
  }

  save() {
    console.log('eto zdes bliat' + this.instruction.id);
    return this.instructionService.addInstruction(this.instruction).map((response: Response) => response.json())
  }

  getTitleInst() {
    this.instruction.userId = JSON.parse(localStorage.getItem('currentUserData')).id;
    this.instruction.title = this.titleInstruction;

    this.save().subscribe(
      data => {
        this.instruction.id = data.id;
        console.log('___inst saved ' + this.instruction.id);
        },
      error => { console.log('Error in getTitleInstruction.');
      });
    this.routershareService.objectInstruction = this.instruction;
    this.routershareService.position = 1;
  }
}
