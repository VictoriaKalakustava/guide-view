
import {Component} from "@angular/core";
import {User} from "../../../entity/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'edit-profile-form',
  templateUrl: './editprofile.component.html',
  styleUrls: ['../profile.component.css', './editprofile.component.css'],
})

export class EditprofileComponent{

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

}
