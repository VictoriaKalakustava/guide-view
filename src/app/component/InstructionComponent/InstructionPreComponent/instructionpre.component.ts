import {Component} from '@angular/core';
import Step from '../../../entity/step';
import {EventService} from "../../../service/event.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {StepService} from "../../../service/step.service";
import {InstructionService} from "../../../service/instruction.service";
import {Instruction} from "../../../entity/instruction";


@Component({
  selector: 'instruction-pre-component',
  templateUrl: './instructionpre.component.html',
  styleUrls: ['./instructionpre.component.css'],
})

export class InstructionpreComponent {
  containers: Step[];
  isDay: boolean;
  modalScrollDistance = 2;
  modalScrollThrottle = 50;
  subscription: Subscription;
  instruction: Instruction = new Instruction;
  ngOnInit() {
    this.subscription = this.eventService.navItem$
      .subscribe(data => this.isDay = data)
    this.instructionService.getInstructionById(203).subscribe(data=> { console.log(data);
    this.instruction = data;
    console.log(this.instruction);
    });
  }

  constructor(private eventService: EventService,
              private instructionService: InstructionService) {
    this.containers = [];
  }
}
