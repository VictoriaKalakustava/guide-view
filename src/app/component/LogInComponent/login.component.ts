import {animate, Component, state, style, transition, trigger} from "@angular/core";
import {User} from "../../entity/user";
import {UserService} from "../../service/user.service";
@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  constructor(private userService : UserService) {

  }
  private user: User;
  signUp(value :any) {
    this.user = new User();
    this.user.login = value.username;
    this.user.email = value.email;
    this.user.password = value.password;
    this.user.name = value.name;
    this.user.surname = value.surname;
    this.userService.signUp(this.user).subscribe(
      data => {console.log(data)}
    )
    console.log(this.user);
  }



}
