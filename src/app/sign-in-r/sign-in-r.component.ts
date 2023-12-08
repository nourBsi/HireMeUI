import { Component } from '@angular/core';
import {Candidat} from "../models/Candidat.model";
import {Recruteur} from "../models/Recruteur.model";
import {LoginServiceService} from "../services/login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-r',
  templateUrl: './sign-in-r.component.html',
  styleUrls: ['./sign-in-r.component.css']
})
export class SignInRComponent {
  constructor(private loginService:LoginServiceService,private router:Router) { }

  returnedRecruteur:Recruteur;
  recruteur:Recruteur;
  signinAttempt(val:any) {
    this.recruteur=new Recruteur();
    this.recruteur.email=val.email;
    this.recruteur.mdp=val.mdp;


    this.loginService.checkRecruteur(this.recruteur).subscribe(
      (data: Recruteur) => {
        this.returnedRecruteur = data;
        window.localStorage.setItem('userr', JSON.stringify(this.returnedRecruteur));
        console.log(this.returnedRecruteur);
        this.router.navigate(['homer']);
      },
      (error) => {

        console.error('An error occurred:');
      }
    )
  }


}
