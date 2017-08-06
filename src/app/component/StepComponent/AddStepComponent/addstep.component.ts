
import {Component, OnInit} from '@angular/core';
import {StepElement} from '../../../entity/element';
import Step from "../../../entity/step";
import {StepService} from "../../../service/step.service";
import {RouterShareService} from "../../../service/router.share.service";
import {Router} from "@angular/router";
import {ElementService} from "../../../service/element.service";

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

  modalScrollDistance = 2;
  modalScrollThrottle = 50;

  constructor( private stepService: StepService,
               private elementService: ElementService,
               private routershareService: RouterShareService,
               private router: Router){
  }

 ngOnInit(): void {
   if(this.routershareService.object == null ) this.router.navigateByUrl("/profile/add-instruction");
   this.containers = [];
 }


  addContainer(type: string) {
    let element: StepElement = new StepElement;
    element.type = type;
    this.containers.push(element);
    console.log(this.containers);
  }

  getValueFromArea(type: string, i: number){
    if(type=='text') return $("div[draggable='true']:eq("+ i +") #id-area-text").html();
    if (type=='video') return $("div[draggable='true']:eq("+ i +") #id-area-video").val();
    if (type=='image') return $("div[draggable='true']:eq("+ i +") #id-area-image").attr('src')
      .split('/')[7].split('.')[0];
  }

  setStep(){
    this.step = new Step(this.titleStep,
                         this.routershareService.object.id,
                         this.routershareService.position);
    this.step.instruction = this.routershareService.object;
    console.log(JSON.stringify(this.step));
    this.stepService.saveStep(this.step).subscribe(data =>{
      console.log(data)
      let i = 0;
      for (let elem of this.containers) {
        let type = this.containers[i].type;
        this.stepElement =  new StepElement();
        this.stepElement.stepId = data.id;
        this.stepElement.type = type.toUpperCase();
        this.stepElement.position = i;
        this.stepElement.value = this.getValueFromArea(type,i);
        this.stepElement.step = data;
        this.elementService.saveElement(this.stepElement).subscribe(data =>{
            console.log('elem:' + i + data);
          },
          error=> console.log('error elem:' + i + data));
        i++;
      }
      this.step.id = data.id
      console.log(JSON.stringify(this.step));
      this.stepService.saveStep(this.step).subscribe(data =>{console.log(data.json())});
    },
      error => {
      console.log('Error in setStep in AddStepComponent: ' + error.json());
      });
  }

}

