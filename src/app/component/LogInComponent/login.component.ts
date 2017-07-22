import {animate, Component, state, style, transition, trigger} from "@angular/core";
import {User} from "../../entity/user";
import {UserService} from "../../service/user.service";

declare var $: any;
@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  isLoginExist: boolean;
  constructor(private userService: UserService) {

  }

  private user: User = new User();
  formErrors = {
    username: '',
  };

  //to do: correct value to if
  signUp(value: any) {
    if (true) {
      this.sendSignUpRequest(value);
    } else {
    }
    console.log('signup');
  }

  checkLogin() {
    var login: String;
    login = $('#username');
    this.formErrors.username = '';
    console.log('logincheck');
    if(this.user.login !== '') {
      this.loginIsExist(login);
    } else {
      this.formErrors.username = 'Login is required.';
    }
  }

  loginIsExist(login: String) {
    this.userService.isExistLogin(login).subscribe(
      data => {
        this.isLoginExist = data.json();
        if(this.isLoginExist) {
          this.formErrors.username = 'Such login is exist.';
        } else {
          this.isLoginExist = false;
        }
      }
    )
  }

  getUserForSignUp(value: any) {
    console.log('getUser');
    this.user.login = value.username;
    this.user.email = value.email;
    this.user.password = value.password;
    this.user.name = value.name;
    this.user.surname = value.surname;
  }

  sendSignUpRequest(value: any) {
    this.getUserForSignUp(value);
    this.userService.signUp(this.user).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
