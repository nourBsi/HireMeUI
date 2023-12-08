import { Component,OnInit } from '@angular/core';
import {LoginServiceService} from "../services/login-service.service";
import {Candidat} from "../models/Candidat.model";
import {Recruteur} from "../models/Recruteur.model";

@Component({
  selector: 'app-profile-r',
  templateUrl: './profile-r.component.html',
  styleUrls: ['./profile-r.component.css']
})
export class ProfileRComponent implements OnInit{
  recruteur: Recruteur = new Recruteur();
  imageSource:string;
  constructor(private config: LoginServiceService) {
  }
  ngOnInit(): void {
    // Fetch user profile data from localStorage
    const storedCandidat = localStorage.getItem('userr');

    if (storedCandidat) {
      this.recruteur = JSON.parse(storedCandidat);


      this.imageSource = `${this.recruteur.descPhoto},${this.recruteur.photoBase64}`;
      // Vous pouvez également stocker imageSource dans localStorage si nécessaire
      localStorage.setItem('imageSource', this.imageSource);
    } else {
      console.error('User data not found in localStorage');

    }
  }

}
