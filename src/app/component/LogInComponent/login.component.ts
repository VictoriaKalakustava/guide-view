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
    this.formErrors.mylogin = '';
    var formLogin = $('#username-signup');
    if(this.user.login === '' ) {
      console.log('required');
      this.formErrors.mylogin = 'LOGIN_REQUEST';
      this.changeInputColor(formLogin, true);
    } else {
      this.loginIsExist(formLogin);
    }
  }

  loginIsExist(login) {
    this.userService.isExistLogin(login.toString()).subscribe(
      data => {
        if(data.json()) {
          this.formErrors.mylogin = "LOGIN_IS_EXIST";
          this.changeInputColor(login, true);
        } else {
          this.changeInputColor(login, false);

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

  changeInputColor(element, isError) {
    if(isError) {
      element.removeClass('greenLine');
      element.addClass('redLine');
    } else {
      element.addClass('greenLine');
      element.removeClass('redLine');
    }
  }
}
