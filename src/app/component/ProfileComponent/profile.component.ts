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
      },
      error => {
        console.log('error in getProfileByLogin');
      });
  }
  username: string;
  private user: User = new User;

  updateProfile(value: any) {
    console.log(JSON.stringify(this.user));
    this.userService.updateProfile(this.user).subscribe(
      data => {console.log(data); }
    );
  }

  getUser() { }
}
