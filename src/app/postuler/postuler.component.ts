import { Component, OnInit } from '@angular/core';
import { CandidatureServiceService } from '../services/candidature-service.service';
import { Candidature } from '../models/Candidature';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  constructor(private candidatureService: CandidatureServiceService) {}

  candidature = {
    statut: 0,
    cv: null,
    cvFileName: '',
    candidat: null,
    offre: null,
    date: new Date().toISOString().split('T')[0]
  };

  ngOnInit() {
    console.log('Le composant Postuler a été initialisé.');

  }


  postuler() {
    this.candidatureService.addCandidature(this.candidature, File).subscribe(
      response => {
        console.log('Candidature ajoutée avec succès', response);

      },
      error => {
        console.error('Erreur lors de l\'ajout de la candidature', error);
      }
    );
  }
}