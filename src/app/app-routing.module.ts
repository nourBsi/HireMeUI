import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProfileComponent} from "./profile/profile.component";
import {JoinUsComponent} from "./join-us/join-us.component";
import {SignInCComponent} from "./sign-in-c/sign-in-c.component";
import {ProfileGuard} from "../profile.guard";
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'home'
  },
  {
    path: 'join-us',
    component: JoinUsComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'clogin',
    component: SignInCComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ProfileGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ProfileGuard]
  },
  {
     path: 'update-candidate', 
     component: UpdateCandidateComponent ,
     canActivate: [ProfileGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
