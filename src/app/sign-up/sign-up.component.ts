import { Component } from '@angular/core';
import {Candidat} from "../models/Candidat.model";
import{ServiceCandidatService} from '../services/service-candidat.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',

  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  selectedFile: File | null = null;
  candidat: Candidat=new Candidat();

  constructor(private signupService:ServiceCandidatService,private router:Router ) { }

  onFileSelected(event: any) {

    const file = event.target.files[0];
    this.candidat.photoBase64 = null;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Set the photo property as a Base64-encoded string
        this.candidat.photoBase64 = e.target.result.split(',')[1];
      };
      reader.readAsDataURL(file);
    }
  }
  signupAttempt(val:any){

    //if (this.selectedFile) {





    const formData = new FormData();
    formData.append('candidat', JSON.stringify(this.candidat));

    // Append the Base64-encoded image string
    if (this.candidat.photoBase64) {
      formData.append('photo', this.candidat.photoBase64);
    }


    this.candidat.nom=val.nom;
    this.candidat.prenom=val.prenom;
    this.candidat.email=val.email;
    this.candidat.mdp=val.mdp;
    this.candidat.tel=val.tel;
    this.candidat.date_naissance=val.date_naissance;
    this.candidat.secteur=val.secteur;


    console.log(this.candidat);



    //}
  this.signupService.signUp(this.candidat).subscribe(()=>{
        console.log("added");

    });
  }
}
