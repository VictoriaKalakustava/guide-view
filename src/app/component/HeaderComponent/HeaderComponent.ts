import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-form',
  templateUrl: './HeaderComponent.html',
  styleUrls: ['./HeaderComponent.css'],
})

export class HeaderComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
}
