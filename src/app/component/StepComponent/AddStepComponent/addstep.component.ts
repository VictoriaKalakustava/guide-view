
import {Component} from '@angular/core';
import {Element} from '../../../entity/element';
import Step from "../../../entity/step";
import {of} from "rxjs/observable/of";
import {Instruction} from "../../../entity/instruction";
import {StepService} from "../../../service/step.service";
import {element} from "protractor";
import {Observable} from "rxjs/Observable";
import {Container} from "@angular/compiler/src/i18n/i18n_ast";
import any = jasmine.any;

declare var $:any;
@Component({
  selector: 'app-instruction-red-form',
  templateUrl: './addstep.component.html',
  styleUrls: ['./addstep.component.css'],
})

export class AddstepComponent {

  constructor( private stepService: StepService){
    this.containers = [];
    this.step = new Step('title-step',1,1);
  }

  containers: Element[];
  step: Step;
  modalScrollDistance = 2;
  modalScrollThrottle = 50;

  addContainer(type: string) {
    let element: Element = new Element;
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
    console.log(this.containers);
    let i = 0;
    for (let elem of this.containers) {
      let type = this.containers[i].type;
      let element = new Element();
      element.stepId = 1;
      element.type = type;
      element.position = 1;
      element.value = this.getValueFromArea(type,i);
      console.log(element);
      this.step.containers[i] = element;
      console.log(this.step);
      console.log(i);
      i++;
    }
    this.step.instructionId = 2;
    console.log(this.step);
  }

  setSte(){
    /*let element: Element[] = new Element[1];
    element[0].type = 'text';
    element[0].stepId = 12;
    element[0].position = 1;
    element[0].value = 'topchik';*/

    console.log('setStep');
    this.step.containers = [];
    console.log(this.step);
    this.stepService.setStep(this.step).subscribe(result => {
      console.log(result);
    });
  }
}

