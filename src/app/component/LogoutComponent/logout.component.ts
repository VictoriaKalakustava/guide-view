import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'logout-form',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})

export class LogoutComponent{
  constructor(private authenticationService: AuthenticationService,
              private router: Router){}
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
