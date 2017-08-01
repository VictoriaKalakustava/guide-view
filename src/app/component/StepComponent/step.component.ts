import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {StepService} from "../../service/step.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'step-component',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css', '../InstructionpageComponent/IntructionpageRedComponent/instructionpagered.component.css'],
})

export class StepComponent implements OnInit{
  private id: number;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private stepService: StepService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.stepService.getStep(this.id).subscribe(res => console.log(res));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
