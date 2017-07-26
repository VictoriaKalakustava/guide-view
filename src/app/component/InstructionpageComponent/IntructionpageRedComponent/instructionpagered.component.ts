
import {Component} from '@angular/core';
import {EntityPageInst} from '../../../entity/entitypageinst';

@Component({
  selector: 'app-instruction-red-form',
  templateUrl: './instructionpagered.component.html',
  styleUrls: ['./instructionpagered.component.css'],
})

export class InstructionpageredComponent {
  containers: Array<EntityPageInst> = [ new EntityPageInst('text')];

  modalScrollDistance = 2;
  modalScrollThrottle = 50;

  addConainer(type: string) {
    this.containers.push( new EntityPageInst(type));
  }
}

