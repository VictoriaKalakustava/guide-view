import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../entity/user";
import {ValidationService} from "../../../service/validation.service";

declare var $: any;
@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  isLoginCorrect = false;
  isPasswordExist = false;
  formErrors = {
    mylogin: null,
    password: null
  }
  model: any = {};
  loading;
  error : string;
  private user: User = new User();

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private validationService: ValidationService){
    this.error = null;
    this.loading = false;
  }

  checkPassword() {
    this.formErrors.password = this.validationService.checkRequired(this.user.password);
    this.isPasswordExist = LoginComponent.setErrors((this.formErrors.password));
  }

  checkLogin() {
    this.formErrors.mylogin = this.validationService.checkRequired(this.user.login);
    this.isLoginCorrect = LoginComponent.setErrors(this.formErrors.mylogin);
  }

  static setErrors(answer: string) {
    return answer === null;
  }

  login(value: any) {
    console.log(this.user.login + ' ' + this.user.password);
    this.authenticationService.login(this.user.login, this.user.password)
      .subscribe(result => {
        if (result == true) {
          $('#hidden-submit').click();
          this.error = null;
          console.log('next save');
          this.userService.saveCurrentUser(this.user.login);
          this.router.navigate(['/profile']);
        }}, (err) => {
          if (err === 'Unauthorized') {
            this.error = "INCORRECT_PASS";
          }});
  }
}
