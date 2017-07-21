import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './component/ProfileComponent';
/*import { LoginComponent } from './login/index';*/

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
