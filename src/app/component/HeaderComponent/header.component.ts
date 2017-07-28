import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-header-form',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  mode: Boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { this.changeMode();}

  changeMode() {
    if(this.mode) {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/solar/bootstrap.min.css");
    } else {
      document.getElementById("bootswatch")
        .setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css");
    }
  }
}
