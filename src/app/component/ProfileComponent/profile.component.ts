import {Component, EventEmitter} from '@angular/core';
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
//TODO process error and save currentUser in cookies
  updateProfile() {
    console.log(JSON.stringify(this.user));
    this.userService.updateProfile(this.user).subscribe(
      data => {console.log(data);
      this.user = data.json();
      }
    );
  }
   updateImg(value: any){
    console.log('it updateImg');
    this.user.image = value;
    this.updateProfile();
  }

  getUser() { }
}
