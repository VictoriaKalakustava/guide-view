import {Component} from '@angular/core';
import Step from "../../entity/step";
import {EventService} from "../../service/event.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {StepService} from "../../service/step.service";


@Component({
  selector: 'instruction-component',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css'],
})

export class InstructionComponent {
  containers: Step[];
  isDay: boolean;
  modalScrollDistance = 2;
  modalScrollThrottle = 50;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.eventService.navItem$
      .subscribe(data => this.isDay = data)
  }

  constructor(private eventService: EventService) {
    console.log("constructor");
    this.containers = [];
    console.log("n init " + this.containers);
  }
}
