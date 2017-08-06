import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from "@angular/platform-browser";
import {AuthGuard} from "../../service/guards/auth.guard";
import {AppComponent} from "../../app.component";
import {EventService} from "../../service/event.service";
import {SearchService} from "../../service/guards/search.service";


@Component({
  selector: 'app-header-form',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  searchParam: string;
  mode: Boolean = false;
  constructor(
    private authGuard: AuthGuard,
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private searchService: SearchService
  ) { this.changeMode();}

  search() {
    this.router.navigate(['/search/' + this.searchParam]);
  }

  changeMode() {
    if(this.mode) {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/solar/bootstrap.min.css");
        localStorage.setItem("mode", "night");
        this.eventService.changeNav(false);
    } else {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css");
        localStorage.setItem("mode", "day");
        this.eventService.changeNav(true);
    }
  }

  @Output() onChanged = new EventEmitter<string>();
  changeLang(lang) {
      this.onChanged.emit(lang);
  }
}
