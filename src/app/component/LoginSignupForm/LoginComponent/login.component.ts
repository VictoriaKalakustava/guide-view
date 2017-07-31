import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../entity/user";
import {loadavg} from "os";

declare var $: any;
@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  model: any = {};
  loading;
  error;
  private user: User = new User();

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private router: Router){
    this.error = false;
    this.loading = false;
  }

  login(value: any) {
    console.log(this.user.login + ' ' + this.user.password);
    this.authenticationService.login(this.user.login, this.user.password)
      .subscribe(result => {
        if (result == true) {
          $('#hidden-submit').click();
          this.error = false;
          this.router.navigate(['/profile']);
        }}, (err) => {
          if (err === 'Unauthorized') {
            this.error = true;
          }});
  }
}
