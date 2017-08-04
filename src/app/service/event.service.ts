import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class EventService {
  // Observable navItem source
  private _navItemSource = new BehaviorSubject<boolean>(localStorage.getItem('mode') === 'day');
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(isDay) {
    this._navItemSource.next(isDay);
  }
}
