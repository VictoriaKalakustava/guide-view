import {Component} from "@angular/core";
import {User} from "../../../entity/user";
import {UserService} from "../../../service/user.service";
import {ValidationService} from "../../../service/validation.service";

@Component({
  selector: 'edit-profile-form',
  templateUrl: './editprofile.component.html',
  styleUrls: ['../profile.component.css', './editprofile.component.css'],
})

export class EditprofileComponent {
  isName = true;
  isSurname = true;
  isEmail = true;
  isLogin = true;
  isPassword = true;
  isNewPassword;
  newPassword: string;
  oldPassword: string;
  formErrors = {
    login: '',
    email: '',
    newPassword: '',
    name: '',
    surname: ''
  }

  checkEmail() {
    this.formErrors.email = this.validationService.checkEmail(this.user.email);
    this.isEmail =!(this.formErrors.email === null);
  }

  checkLogin() {
    this.formErrors.login = this.validationService.checkRequired(this.user.login);
    this.isLogin = (this.formErrors.login === null);
    if(this.isLogin) {
      this.loginIsExist(this.user.login);
    }
  }

  checkName() {
    this.formErrors.name = this.validationService.checkRequired(this.user.name);
    this.isName = (this.formErrors.name === null);
  }

  checkSurname() {
    this.formErrors.surname = this.validationService.checkRequired(this.user.surname);
    this.isSurname = (this.formErrors.surname === null);
  }

  checkPassword() {
    this.formErrors.newPassword = this.validationService.checkPassword(this.newPassword);
    this.isNewPassword = (this.formErrors.newPassword === null);
  }

  loginIsExist(login) {
    this.userService.isExistLogin(login).subscribe(
      data => {
        this.isLogin = true;
      }, err => {
        if (err.status == 409) {
          this.formErrors.login = "LOGIN_IS_EXIST";
          this.isLogin = false;
        }
      }
    )
  }

  constructor(private userService: UserService,
              private validationService: ValidationService) {
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.userService.getProfileByLogin(this.username).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('error in getProfileByLogin');
      });
  }

  username: string;
  private user: User = new User;

  updateProfile() {
    console.log(JSON.stringify(this.user));
    this.userService.updateProfile(this.user).subscribe(
      data => {
        console.log(data);
        this.user = data.json();
      }
    );
  }

  updateImg(value: any) {
    console.log('it updateImg');
    this.user.image = value;
    this.updateProfile();
  }

}
