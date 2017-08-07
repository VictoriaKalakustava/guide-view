import {Component, Input} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import {Subscription} from "rxjs/Subscription";
import {EventService} from "../../../service/event.service";
import {MyComment} from "../../../entity/comment";
import {InstructionService} from "../../../service/instruction.service";

declare var $: any;

@Component({
  selector: "comment-component",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent {
  @Input() instructionId: number;
  private myComment: MyComment;
  private comment: MyComment;
  isDay: boolean;
  subscription:Subscription;
  constructor(private eventService: EventService,
              private instructionService: InstructionService) {
    this.instructionId = 34;
    console.log("COMMENTS" + this.instructionId);
    this.instructionService.getComments(this.instructionId).subscribe(
      data =>{ console.log(data);
      console.log("RETURNS COMMENTS");}
    );
  }

  addComment() {
    console.log("addComment");
    this.myComment = new MyComment();
    this.myComment.value = $('#comment').html();
    this.myComment.userId = JSON.parse(localStorage.getItem('currentUserData')).id;
    this.myComment.instructionId = this.instructionId;
    console.log(this.myComment);
    this.instructionService.addTag(this.myComment).subscribe( data => console.log(data));
  }

  ngOnInit() {

    this.subscription = this.eventService.navItem$
      .subscribe(data => this.isDay = data)
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  getColor() {
    if(localStorage.getItem("mode") === "day") {
      return "#FFFFFF";
    } else {
      return "#000000";
    }
  }

}
