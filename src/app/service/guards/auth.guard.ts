import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

declare var $:any;
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    $('#login-button-header').click();
    return false;
  }

  isActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    return false;
  }
}
