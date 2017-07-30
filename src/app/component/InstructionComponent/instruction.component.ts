import {Component, OnInit} from '@angular/core';
import {InstructionpagepreComponent} from "../InstructionpageComponent/InstructionpagePreComponent/instructionpagepre.component";
import Step from "../../entity/step";

@Component({
  selector: 'instruction-component',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css', '../InstructionpageComponent/IntructionpageRedComponent/instructionpagered.component.css'],
})

export class InstructionComponent implements OnInit{
  containers: Step[];

  constructor() {
    console.log("constructor");
    this.containers = [];
    this.containers.push(new Step("a", "a"));
    this.containers.push(new Step("b", "b"));
    this.containers.push(new Step("c", "c"));
    this.containers.push(new Step("d", "d"));
    this.containers.push(new Step("dasds", "a"));
    this.containers.push(new Step("1111b", "b"));
    this.containers.push(new Step("222c", "c"));
    this.containers.push(new Step("333d", "d"));
    this.containers.push(new Step("a", "a"));
    this.containers.push(new Step("b", "b"));
    this.containers.push(new Step("c", "c"));
    this.containers.push(new Step("d", "d"));
    console.log("n init " + this.containers);


  }

  ngOnInit() {

  }
}
