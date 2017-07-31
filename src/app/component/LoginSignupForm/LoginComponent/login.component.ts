import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../entity/user";

declare var $: any;
@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  model: any = {};
  loading = false;
  error = false;
  private user: User = new User();

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private router: Router){}

  login(value: any) {
    this.loading = true;
    console.log(this.user.login + ' ' + this.user.password);
    this.authenticationService.login(this.user.login, this.user.password)
      .subscribe(result => {
        if (result === true) {
          $('#hidden-submit').click();
          this.router.navigate(['/profile']);
          return true;
        }
      });
    this.error = true;
  }
}
