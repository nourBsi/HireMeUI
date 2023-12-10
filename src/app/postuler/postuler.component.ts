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
  candidature: Candidature = new Candidature();
    statut= 0;
    cv: null;
    cvFileName: '';
    candidat: null;
    offre: null;

  ngOnInit() {
    console.log('Le composant Postuler a été initialisé.');

  }


  postuler() {
    this.candidatureService.addCandidature(this.candidature, this.cv).subscribe(
      response => {
        console.log('Candidature ajoutée avec succès', response);

      },
      error => {
        console.error('Erreur lors de l\'ajout de la candidature', error);
      }
    );
  }
}