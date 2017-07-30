import {Component} from '@angular/core';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';
import {selector} from "rxjs/operator/multicast";
import {FormGroup, FormGroupName} from "@angular/forms";
declare var $: any;
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent {
  constructor(private userService: UserService){

    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.userService.getProfileByLogin(this.username).subscribe(
      data => {
        this.user = data;
        this.username = this.user.login;
        this.firstname = this.user.name;
        this.lastname = this.user.surname;
        this.email = this.user.email;
        this.sex = this.user.sex;
        this.password = this.user.password;
      },
      error => {
        console.log('error in getProfileByLogin');
      });
  }


  editProfileForm: FormGroup;
  private user: User = new User;

  username: string;
  firstname: string;
  lastname: string;
  email: string;
  sex: string;
  password: string;

  updateProfile(value: any) {
    this.userService.updateProfile(this.user).subscribe(
      data => {console.log(data); }
    );
    console.log('run update profile' + this.user);
  }

  getUser() { }
}
