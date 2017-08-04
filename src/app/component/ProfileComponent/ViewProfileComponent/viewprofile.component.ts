import {Component} from "@angular/core";
import {User} from "../../../entity/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'view-profile-form',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['../profile.component.css', './viewprofile.component.css'],
})

export class ViewprofileComponent{
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


}
