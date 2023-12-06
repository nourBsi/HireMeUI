import { Component } from '@angular/core';
import {Candidat} from "../models/Candidat.model";
import {ServiceCandidatService} from "../services/service-candidat.service";
import {Router} from "@angular/router";
import {Recruteur} from "../models/Recruteur.model";
import {RecruteurServiceService} from "../services/recruteur-service.service";
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-sign-up-r',
  templateUrl: './sign-up-r.component.html',
  styleUrls: ['./sign-up-r.component.css']
})
export class SignUpRComponent {
  selectedFile: File | null = null;
  recruteur: Recruteur = new Recruteur();
  date:Date;

  constructor(private signupService: RecruteurServiceService, private router: Router,public datepipe: DatePipe) { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.recruteur.photoBase64 = null;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.recruteur.descPhoto = e.target.result.split(',')[0];
        this.recruteur.photoBase64 = e.target.result.split(',')[1];
      };
      reader.readAsDataURL(file);
    }
  }

  signuprAttempt(val: any) {
    const formData = new FormData();
    formData.append('candidat', JSON.stringify(this.recruteur));

    if (this.recruteur.photoBase64) {
      formData.append('photo', this.recruteur.photoBase64);
    }

    this.recruteur.nom = val.nom;
    this.recruteur.prenom = val.prenom;
    this.recruteur.email = val.email;
    this.recruteur.mdp = val.mdp;
    this.recruteur.tel = val.tel;
    this.recruteur.date_naissance = val.date_naissance;
    this.recruteur.secteur = val.secteur;
    this.recruteur.entreprise = val.entreprise;
    this.recruteur.date_inscri = new Date();
   this.datepipe.transform( this.recruteur.date_inscri, 'yyyy-MM-dd');

    console.log(this.recruteur);

    this.signupService.signUpr(this.recruteur).subscribe(() => {
      console.log("added");
    });
  }
}
