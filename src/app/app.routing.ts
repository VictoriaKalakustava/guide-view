import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './component/ProfileComponent';
import { AuthGuard} from "./service/guards/auth.guard";
import { LoginComponent} from "./component/LoginSignupForm/LoginComponent/login.component";
import {StepComponent} from "./component/StepComponent/step.component";
import {AddInstructionComponent} from "./component/InstructionComponent/AddInstructionComponent/add.instruction.component";
import {ViewprofileComponent} from "./component/ProfileComponent/ViewProfileComponent/viewprofile.component";
import {EditprofileComponent} from "./component/ProfileComponent/EditProfileComponent/editprofile.component";
import {AddstepComponent} from "./component/StepComponent/AddStepComponent/addstep.component";

const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: ViewprofileComponent},
      { path: 'add-instruction',
        component: AddInstructionComponent,
        /*children:[{
          path: 'add-step',
          component: AddstepComponent,
        }]*/},
      { path: 'edit-profile', component: EditprofileComponent},
      { path: 'add-step-inst', component: AddstepComponent},
    ]
  },
  { path: 'step/get-by-id/:id', component: StepComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
