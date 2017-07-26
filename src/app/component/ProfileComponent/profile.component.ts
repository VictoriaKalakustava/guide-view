import {Component} from '@angular/core';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';
declare var $: any;
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent {
  constructor(private userService: UserService){
  }
  private user: User = new User;

  updateProfile(value: any) {
    this.userService.updateProfile(this.user).subscribe(
      data => {console.log(data); }
    );
    console.log('run update profile' + this.user);
  }

  getUser() {
    this.userService.getProfileByLogin('testlog').subscribe(
      data => {
        this.user = JSON.parse(data.toString());
        $('#new_username').setValue(this.user.login);
        $('#new_password').setValue(this.user.password);
        $('#new_name').setValue(this.user.name);
        $('#new_lastname').setValue(this.user.surname);
        $('#new_email').setValue(this.user.email);
      },
      error => {
        console.log('error in getProfileByLogin');
      });
  }
}
