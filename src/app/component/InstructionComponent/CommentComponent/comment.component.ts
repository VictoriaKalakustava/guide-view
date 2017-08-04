import {Component} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import {Subscription} from "rxjs/Subscription";
import {EventService} from "../../../service/event.service";

@Component({
  selector: "comment-component",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent {
  isDay: boolean;
  subscription:Subscription;
  constructor(private eventService: EventService) {

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
