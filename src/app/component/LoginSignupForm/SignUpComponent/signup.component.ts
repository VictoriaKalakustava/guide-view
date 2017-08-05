import {animate, Component, state, style, transition, trigger} from '@angular/core';
import {User} from '../../../entity/user';
import {UserService} from '../../../service/user.service';
import {AuthenticationService} from "../../../service/authentication.service";
import {Router} from "@angular/router";
import {ValidationService} from "../../../service/validation.service";

declare var $: any;

@Component({
  selector: 'sign-up-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
  isLoginCorrect = false;
  isNameExist = false;
  isSurnameExist = false;
  isPasswordExist = false;
  isPasswordConfirm = false;
  isEmailCorrect = false;

  passwordConfirm: string;


  private user: User = new User();
  formErrors = {
    mylogin: '',
    password: '',
    passwordConfirm: '',
    email: '',
    name: '',
    surname: ''
  };

  constructor(private userService: UserService,
              private validationService: ValidationService) {
  }

  signUp(value: any) {
    if (this.isFormValid()) {
      this.sendSignUpRequest(value);
    }
  }

  isFormValid() {
    return this.isLoginCorrect &&
      this.isNameExist &&
      this.isSurnameExist &&
      this.isPasswordExist &&
      this.isPasswordConfirm &&
      this.isEmailCorrect;
  }

  checkEmail() {
    this.formErrors.email = this.validationService.checkEmail(this.user.email);
    this.isEmailCorrect = SignupComponent.setErrors(this.formErrors.email);
  }

  static setErrors(answer: string) {
    return answer === null;
  }

  checkPassword() {
    this.formErrors.password = this.validationService.checkPassword(this.user.password);
    this.isPasswordExist = SignupComponent.setErrors((this.formErrors.password));
  }

  checkPasswordConfirm() {
    this.formErrors.passwordConfirm = this.validationService.confirmPassword(this.user.password, this.passwordConfirm);
    this.isPasswordConfirm = SignupComponent.setErrors(this.formErrors.passwordConfirm);
  }

  checkLogin() {
    this.formErrors.mylogin = this.validationService.checkRequired(this.user.login);
    this.isLoginCorrect = SignupComponent.setErrors(this.formErrors.mylogin);
    if(this.isLoginCorrect) {
      this.loginIsExist(this.user.login);
    }
  }

  checkName() {
    this.formErrors.name = this.validationService.checkRequired(this.user.name);
    this.isNameExist = SignupComponent.setErrors(this.formErrors.name);
  }

  checkSurname() {
    this.formErrors.surname = this.validationService.checkRequired(this.user.surname);
    this.isSurnameExist = SignupComponent.setErrors(this.formErrors.surname);
  }

  loginIsExist(login) {
    this.userService.isExistLogin(login).subscribe(
      data => {
        this.isLoginCorrect = true;
      }, err => {
        if (err.status == 409) {
          this.formErrors.mylogin = "LOGIN_IS_EXIST";
          this.isLoginCorrect = false;
        }
      }
    )
  }

  sendSignUpRequest(value: any) {
    this.userService.signUp(this.user).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
