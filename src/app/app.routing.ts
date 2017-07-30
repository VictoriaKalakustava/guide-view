import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './component/ProfileComponent';
import {LoginSignupComponent} from "./component/LoginSignupForm/login.signup.component";
import {SignupComponent} from "./component/LoginSignupForm/SignUpComponent/signup.component";
import {LoginComponent} from "./component/LoginSignupForm/LoginComponent/login.component";
/*import { LoginComponent } from './login/index';*/

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
