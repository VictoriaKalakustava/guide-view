import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class ValidationService {
  errors = {
    required: "REQUIRED",
    email: "INVALID_EMAIL",
    password: "PASSWORD_RULES",
    confirmPass: "PASSWORDS_NOT_EQUALS",
    loginExist: "LOGIN_IS_EXIST"
  }

  constructor(private userService: UserService) {

  }

  checkRequired(line: string) {
    if(line === '') {
      return this.errors.required;
    }
    return null;
  }

  checkPassword(line:string) {
    var answer = this.checkRequired(line);
    if(answer) {
      return answer;
    } else {
      return this.passwordPattern(line);
    }
  }

  confirmPassword(password: string, confirm: string) {
    if(password === confirm) {
      return null;
    } else {
      return this.errors.confirmPass;
    }
  }

  passwordPattern(line:string) {
    if (RegExp("^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$").test(line)) {
      return null;
    } else {
      return this.errors.password;
    }
  }

  checkEmail(line: string) {
    var answer = this.checkRequired(line);
    if(answer) {
      return answer;
    } else {
      return this.emailPattern(line);
    }
  }

  emailPattern(line: string) {
    if (RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$').test(line)) {
      return null;
    } else {
      return this.errors.email;
    }
  }
}
