import {Component, EventEmitter} from '@angular/core';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';
import {selector} from "rxjs/operator/multicast";
import {FormGroup, FormGroupName} from "@angular/forms";
import {Route} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent {

//TODO process error and save currentUser in cookies


  getUser() { }
}
