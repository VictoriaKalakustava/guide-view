import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import Step from "../../../entity/step";
import {Instruction} from "../../../entity/instruction";
import {InstructionService} from "../../../service/instruction.service";
import {RouterShareService} from "../../../service/router.share.service";
import {StepService} from "../../../service/step.service";
import {ValidationService} from "../../../service/validation.service";


@Component({
  selector: 'add-instruction-component',
  templateUrl: './add.instruction.component.html',
  styleUrls: ['./add.instruction.component.css', '../InstructionPreComponent/instructionpre.component.css'],
})

export class AddInstructionComponent implements OnInit{
  instruction: Instruction = new Instruction();
  newTag: string;
  titleInstruction = '';
  containers: Step[];
  idInst: number;

  isTitleCorrect: boolean;
  isContainers: boolean;

  formErrors = {
    titleInstruction: '',
  }


  constructor(private stepService: StepService,
              private instructionService: InstructionService,
              private routershareService: RouterShareService,
              private validationService: ValidationService) {
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
    this.checkTitle();
    this.checkContainers();
  }

  checkContainers(){
    this.containers.length === 0 ? this.isContainers = false : this.isContainers = true;
  }

  addTag() {
    console.log(this.newTag);
    console.log(this.instruction);
  }

  save() {
    return this.instructionService.addInstruction(this.instruction).map((response: Response) => response.json())
  }

  getTitleInst() {
    this.instruction.userId = JSON.parse(localStorage.getItem('currentUserData')).id;
    this.instruction.title = this.titleInstruction;
    console.log('current_user' + JSON.parse(localStorage.getItem('currentUser')).username);
    this.instruction.userLogin = JSON.parse(localStorage.getItem('currentUser')).username;
    this.instruction.step = this.containers;
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
  saveAll(){
    let i = 0;
    for(let elem of this.containers){
      console.log('Step before ' + JSON.stringify( elem));
      elem.position = i;
      elem.instructionId = this.instruction.id;
      console.log('Step after ' + JSON.stringify( elem));
      this.stepService.saveStep(elem).subscribe(data=>{
        console.log('saved' + data.json());
      }, error=> {console.log(error)});
      i++;
    }
  }

  checkTitle(){
    this.formErrors.titleInstruction = this.validationService.checkRequired(this.titleInstruction);
    this.isTitleCorrect = this.formErrors.titleInstruction === null;
  }
}
