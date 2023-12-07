import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { Candidat } from '../models/Candidat.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  candidat: Candidat = new Candidat();
  imageSource: string;

  constructor(private config: LoginServiceService) {}

  ngOnInit(): void {
    // Fetch user profile data from localStorage
    const storedCandidat = localStorage.getItem('user');
  
    if (storedCandidat) {
      this.candidat = JSON.parse(storedCandidat);
  

      this.imageSource = `${this.candidat.descPhoto},${this.candidat.photoBase64}`;
      // Vous pouvez également stocker imageSource dans localStorage si nécessaire
      localStorage.setItem('imageSource', this.imageSource);
    } else {
      console.error('User data not found in localStorage');
     
    }
  }

}
