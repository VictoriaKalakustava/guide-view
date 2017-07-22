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
    mylogin: '',
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
    this.formErrors.mylogin = 'a';
    var formLogin = $('#username-signup');
    console.log('logincheck');
    if(this.user.login === '' ) {
      console.log('required');
      this.formErrors.mylogin = 'Login is required.';
      formLogin.addClass('redLine');
    } else {
      this.loginIsExist(formLogin);
    }
  }

  loginIsExist(login) {
    console.log('is exist method');
    this.userService.isExistLogin(login.toString()).subscribe(
      data => {
        if(data.json()) {
          this.formErrors.mylogin = 'Such login is exist.';
        } else {

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
