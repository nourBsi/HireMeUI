import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProfileComponent} from "./profile/profile.component";
import {JoinUsComponent} from "./join-us/join-us.component";
import {SignInCComponent} from "./sign-in-c/sign-in-c.component";
import {ProfileGuard} from "../profile.guard";
import {ProfileGuard2} from "../profile.guard2";
import {SignUpRComponent} from "./sign-up-r/sign-up-r.component";
import {SignInRComponent} from "./sign-in-r/sign-in-r.component";
import {HomeRComponent} from "./home-r/home-r.component";
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import {ProfileRComponent} from "./profile-r/profile-r.component";
import {UpdateRecruteurComponent} from "./update-recruteur/update-recruteur.component";
import {CandidaturesComponent} from "./candidatures/candidatures.component";
import { DetailsComponent } from './details/details.component';


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
    path: 'rlogin',
    component: SignInRComponent,
  },
  {
    path: 'signupr',
    component: SignUpRComponent,
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
  {
    path: 'homer',
    component: HomeRComponent,
    canActivate: [ProfileGuard2]
  },
  {
    path: 'profile-r',
    component: ProfileRComponent,
    canActivate: [ProfileGuard2]
  },
  {
    path: 'update-recruteur',
    component: UpdateRecruteurComponent,
    canActivate: [ProfileGuard2]
  }
  ,
  {
    path: 'candidatures',
    component: CandidaturesComponent,
  }
  ,
  {
    path: 'details/:id',
    component: DetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
