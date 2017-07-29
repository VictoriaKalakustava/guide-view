import {animate, Component, state, style, transition, trigger} from '@angular/core';
import {User} from '../../../entity/user';
import {UserService} from '../../../service/user.service';
import {AuthenticationService} from "../../../service/authentication.service";
import {Router} from "@angular/router";

declare var $: any;
@Component({
  selector: 'sign-up-form',
  templateUrl: './signup.component.html',
  // styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
  isLoginExist: boolean = false;
  isPasswordExist: boolean = false;
  isPasswordConfirm: boolean = false;
  passwordConfirm: String;
  private user: User = new User();
  formErrors = {
    mylogin: '',
    password: '',
    passwordConfirm: ''
  };

  constructor(private userService: UserService) {
  }

  //TODO: correct value to if
  signUp(value: any) {
    if (true) {
      this.sendSignUpRequest(value);
    } else {
    }
    console.log('signup');
  }

  checkPassword() {
    this.formErrors.password = '';
    var password = $('#password-signup');
    console.log(this.user.password);
    if(this.user.password === '') {
      console.log('required');
      this.formErrors.password = 'PASSWORD_REQUEST';
      this.isPasswordExist = false;
      this.changeInputColor(password, true);
    } else {

      this.isPasswordExist = true;
      this.changeInputColor(password, false);
    }
    this.checkPasswordConfirm();
  }

  checkPasswordConfirm() {
    this.formErrors.passwordConfirm = '';
    var password = $('#password-confirm');
    console.log(this.passwordConfirm);
    if(this.passwordConfirm === this.user.password) {
      this.changeInputColor(password, false);
      this.isPasswordConfirm = true;
    } else {
      this.isPasswordConfirm = false;
      console.log('required');
      this.formErrors.passwordConfirm = 'PASSWORDS_NOT_EQUALS';
      this.changeInputColor(password, true);
    }
  }

  checkLogin() {
    this.formErrors.mylogin = '';
    var formLogin = $('#username-signup');
    console.log(this.user.login);
    console.log(formLogin.component);
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
          this.isLoginExist = false;
        } else {
          this.changeInputColor(login, false);
          this.isLoginExist = true;
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
        console.log(data);
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
