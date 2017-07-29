import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './component/ProfileComponent';
import {AuthGuard} from "./service/guards/auth.guard";
import {LoginComponent} from "./component/LoginSignupForm/LoginComponent/login.component";

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
