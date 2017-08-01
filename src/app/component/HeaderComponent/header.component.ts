import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from "@angular/platform-browser";
import {AuthGuard} from "../../service/guards/auth.guard";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header-form',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  mode: Boolean = false;
  constructor(
    private authGuard: AuthGuard,
    private route: ActivatedRoute,
    private router: Router,
  ) { this.changeMode();}

  changeMode() {
    if(this.mode) {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/solar/bootstrap.min.css");
    } else {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/simplex/bootstrap.min.css");
    }
  }

  @Output() onChanged = new EventEmitter<string>();
  changeLang(lang) {
    this.onChanged.emit(lang);
  }
}
