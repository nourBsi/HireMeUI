import { Component } from '@angular/core';
import {LoginServiceService} from "../services/login-service.service";
import {Router} from "@angular/router";
import {Candidat} from "../models/Candidat.model";

@Component({
  selector: 'app-sign-in-c',
  templateUrl: './sign-in-c.component.html',
  styleUrls: ['./sign-in-c.component.css']
})
export class SignInCComponent {
  constructor(private loginService:LoginServiceService,private router:Router) { }
  returnedCandidate:Candidat;
    candidat:Candidat;
  signinAttempt(val:any) {
  this.candidat=new Candidat();
    this.candidat.email=val.email;
    this.candidat.mdp=val.mdp;


    this.loginService.checkCandidate(this.candidat).subscribe(
        (data: Candidat) => {
          this.returnedCandidate = data;
          if(data){
            window.localStorage.setItem('user', JSON.stringify(this.returnedCandidate));
            console.log(this.returnedCandidate);
            this.router.navigate(['home']);
          }

        },
        (error) => {

          console.error('An error occurred:');
        }
      )
    }



}
