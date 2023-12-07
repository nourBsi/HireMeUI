import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { Candidat } from '../models/Candidat.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Update with your CSS file if needed
})
export class ProfileComponent implements OnInit {
  candidat: Candidat = new Candidat();

  ngOnInit(): void {
    // Fetch user profile data from localStorage
    const storedCandidat = localStorage.getItem('user');

    if (storedCandidat) {
      this.candidat = JSON.parse(storedCandidat); // Corrected the property name to "candidat"
    } else {
      // Handle the case where user data is not found in localStorage
      console.error('User data not found in localStorage');
    }
    console.log(this.candidat.photoBase64);
    console.log(this.candidat.descPhoto);


  }
}
