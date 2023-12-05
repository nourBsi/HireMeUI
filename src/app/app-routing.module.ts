import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProfileComponent} from "./profile/profile.component";
import {JoinUsComponent} from "./join-us/join-us.component";
import {SignInCComponent} from "./sign-in-c/sign-in-c.component";
import {ProfileGuard} from "../profile.guard";


const routes: Routes = [
  {
    path: '',
    canActivate: [ProfileGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [ProfileGuard],
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
        canActivate: [ProfileGuard],
      },
      // Add other routes as needed
    ],


  },
  {path:'join-us',
    component:JoinUsComponent
  },
  {path:'home',
    component:HomeComponent,
    canActivate:[ProfileGuard]
  },
  {path:'signup',
    component:SignUpComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[ProfileGuard]
  },
  {
    path:'clogin',
    component:SignInCComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
