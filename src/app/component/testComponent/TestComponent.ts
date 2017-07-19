import {Component} from '@angular/core';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-test',
  template: '<div>{{user.lastName}}dgfdg</div>'
})
export class TestComponent {
  user: User = new User();
  constructor(private userService: UserService) {
    this.userService.getUser1().subscribe(
      data => {
        this.user = data;
        console.log('In subscribe');
      }
    );
    console.log(this.user);
  }
}
