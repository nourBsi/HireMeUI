import {Component, OnInit} from '@angular/core';
import {OffreEmploie} from "../models/OffreEmploie";
import {Candidat} from "../models/Candidat.model";
import { CandidatureServiceService } from '../services/candidature-service.service';
import { OffreEmploiServiceService } from '../services/offre-emploi-service.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit{
  constructor(
    private service: OffreEmploiServiceService,
    private candidatureService: CandidatureServiceService
  ) {}
  candidat:Candidat;

  ngOnInit() {
    const storedCandidat = localStorage.getItem('user');

    if (storedCandidat) {
      this.candidat = JSON.parse(storedCandidat);
    }
  }

 
  remove(id_favoris: number) {
    const storedCandidat = localStorage.getItem('user');
  
    if (storedCandidat) {
      this.candidat = JSON.parse(storedCandidat);
        const index = this.candidat.favoris.findIndex((offre) => offre.id_offre === id_favoris);
  
      if (index !== -1) {
        this.candidat.favoris.splice(index, 1);
          localStorage.setItem('user', JSON.stringify(this.candidat));
          this.service.removeFavoris(id_favoris, this.candidat.id_candidat).subscribe(
          (response) => {
            console.log("Removed from favorites");
          },
          (error) => {
            console.error("Error removing from favorites", error);
          }
        );
      } else {
        console.warn("Job offer not found in favorites");
      }
    }
  }
  
  
  
  postuler(){

  }
}
