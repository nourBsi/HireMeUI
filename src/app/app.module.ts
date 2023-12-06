import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { SignInCComponent } from './sign-in-c/sign-in-c.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { SignUpRComponent } from './sign-up-r/sign-up-r.component';
import {DatePipe} from "@angular/common";
import { SignInRComponent } from './sign-in-r/sign-in-r.component';
import { HomeRComponent } from './home-r/home-r.component';
import { NavbarRComponent } from './navbar-r/navbar-r.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignUpComponent,
    AddCandidateComponent,
    JoinUsComponent,
    SignInCComponent,
    UpdateCandidateComponent,
    SignUpRComponent,
    SignInRComponent,
    HomeRComponent,
    NavbarRComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    [DatePipe]

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
