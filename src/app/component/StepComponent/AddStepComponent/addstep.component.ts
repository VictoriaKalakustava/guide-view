
import {Component, OnInit} from '@angular/core';
import {StepElement} from '../../../entity/element';
import Step from "../../../entity/step";
import {StepService} from "../../../service/step.service";
import {RouterShareService} from "../../../service/router.share.service";
import {Router} from "@angular/router";
import {ElementService} from "../../../service/element.service";
import {ValidationService} from "../../../service/validation.service";

declare var $:any;
@Component({
  selector: 'add-step-form',
  templateUrl: './addstep.component.html',
  styleUrls: ['./addstep.component.css'],
})

export class AddstepComponent implements OnInit{
  containers: StepElement[];

  titleStep: string;
  step: Step;
  stepElement: StepElement;

  isTitleCorrect: boolean;
  isContainers: boolean;

  formErrors = {
    titleInstruction: '',
  }

  modalScrollDistance = 2;
  modalScrollThrottle = 50;

  constructor( private stepService: StepService,
               private elementService: ElementService,
               private routershareService: RouterShareService,
               private router: Router,
               private validationService: ValidationService){
  }

 ngOnInit(): void {
   if(this.routershareService.objectInstruction == null ) this.router.navigate(['/profile/add-instruction'],false);
   this.containers = [];
   this.checkTitle();
   this.checkContainers();
 }


  addContainer(type: string) {
    let element: StepElement = new StepElement;
    element.type = type;
    this.containers.push(element);
  }

  getValueFromArea(type: string, i: number){
    if(type=='text') return $("div[draggable='true']:eq("+ i +") #id-area-text").html();
    if (type=='video') return $("div[draggable='true']:eq("+ i +") #id-area-video").val();
    if (type=='image') return $("div[draggable='true']:eq("+ i +") #id-area-image").attr('src')
      .split('/')[7].split('.')[0];
  }

  checkTitle(){
    this.formErrors.titleInstruction = this.validationService.checkRequired(this.titleStep);
    this.isTitleCorrect = this.formErrors.titleInstruction === null;
  }

  checkContainers(){
    console.log('check container' + this.containers.length);
    this.containers.length == 0 ?  this.isContainers = false: this.isContainers = true;
  }

  copyDataFields(i: number, data: any){
    let type = this.containers[i].type;
    this.stepElement =  new StepElement();
    this.stepElement.stepId = data.id;
    this.stepElement.type = type.toUpperCase();
    this.stepElement.position = i;
    this.stepElement.value = this.getValueFromArea(type,i);
    this.stepElement.step = data;
  }

  setStep(){
    this.step = new Step(this.titleStep,
                         this.routershareService.objectInstruction.id,
                         this.routershareService.position);
    //this.step.instruction = this.routershareService.objectInstruction;
    console.log(JSON.stringify(this.step));
    this.stepService.saveStep(this.step).subscribe(data =>{
      console.log(data)
      let i = 0;
      for (let elem of this.containers) {
        if(!this.getValueFromArea(this.containers[i].type,i)) { i--; continue;}
        this.copyDataFields(i,data);
        this.elementService.saveElement(this.stepElement).subscribe(data =>{
            console.log('elem:' + i + data);
          },error=> console.log('error elem:' + i + data));
        i++;
      }
      if(i == 0) {
        this.step.id = data.id;
        data.instruction = this.routershareService.objectInstruction;
        this.stepService.deleteStep(data).subscribe(resp=>{console.log(resp)})}
      else{
        this.step.id = data.id;
        console.log(JSON.stringify(this.step));
        this.stepService.saveStep(this.step).subscribe(data =>{
          this.routershareService.containers.push(data);
          this.routershareService.isAdded = true;
          this.routershareService.idInst = this.step.instructionId;
          this.router.navigate(['/profile/add-instruction']);
        },error=>{ console.log('Error in saveStep in AddStepComponent' + error)});
      }
    },error => {
      console.log('Error in pre saveStep in AddStepComponent' + error);
      });
  }

}

