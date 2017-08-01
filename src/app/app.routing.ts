import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './component/ProfileComponent';
import { AuthGuard} from "./service/guards/auth.guard";
import { LoginComponent} from "./component/LoginSignupForm/LoginComponent/login.component";
import {StepComponent} from "./component/StepComponent/step.component";

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'step/get-by-id/:id', component: StepComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
