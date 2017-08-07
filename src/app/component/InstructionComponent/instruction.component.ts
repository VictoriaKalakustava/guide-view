import {Component, OnInit} from '@angular/core';
import Step from "../../entity/step";
import {EventService} from "../../service/event.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {Instruction} from "../../entity/instruction";
import {InstructionService} from "../../service/instruction.service";
import {MyComment} from "../../entity/comment";

declare var $:any;
@Component({
  selector: 'instruction-component',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css'],
})

export class InstructionComponent implements OnInit {
  private instruction: Instruction = new Instruction();
  private myComment: MyComment;
  private comments: MyComment[] = [];
  private containers: Step[];
  private isDay: boolean;
  private subscription: Subscription;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private instructionService: InstructionService) {
    this.sub = this.route.params.subscribe(params => {
      this.instruction.id = +params['id'];
      this.instructionService.getById(this.instruction.id).subscribe(
        data => {
          this.instruction = data;

        });
      this.instructionService.getComments(this.instruction.id).subscribe(
        data =>{ console.log(data);
        this.comments = data;
          console.log("RETURNS COMMENTS");}
      );
    });
    console.log("constructor");
    this.containers = [];
    console.log("n init " + this.containers);
  }

  ngOnInit() {
    this.subscription = this.eventService.navItem$
      .subscribe(data => this.isDay = data);
  }

  addComment() {
    console.log("addComment");
    this.myComment = new MyComment();
    this.myComment.value = $('#comment').html();
    this.myComment.userId = JSON.parse(localStorage.getItem('currentUserData')).id;
    this.myComment.instructionId = this.instruction.id;
    console.log(this.myComment);
    this.instructionService.addTag(this.myComment).subscribe( data => {
      this.comments.push(data);
      $('#comment').html("");
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
