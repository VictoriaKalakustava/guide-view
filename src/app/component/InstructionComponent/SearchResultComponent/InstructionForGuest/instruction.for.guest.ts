import {Component, Input} from "@angular/core";
import {Instruction} from "../../../../entity/instruction";

@Component({
  selector: 'instruction-for-guest',
  templateUrl: './instruction.for.guest.html',
  styleUrls: ['./instruction.for.guest.css'],
})
export class InstructionForGuestComponent {
  @Input() instruction: Instruction;
}
