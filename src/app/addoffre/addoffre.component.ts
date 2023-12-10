import { Component, OnInit } from '@angular/core';
import { OffreEmploiServiceService } from '../services/offre-emploi-service.service';
import { OffreEmploie } from '../models/OffreEmploie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.component.html',
  styleUrls: ['./addoffre.component.css']
})
export class AddoffreComponent implements OnInit {
  nouvelleOffre: OffreEmploie = new OffreEmploie();  
  idRecruteur: number;

  constructor(private offreService: OffreEmploiServiceService, private route: ActivatedRoute) {
    // Constructor
  }

  ngOnInit(): void {
    this.nouvelleOffre.etat = 1;
    this.idRecruteur = +this.route.snapshot.paramMap.get('id_recruteur');
  }

  ajouterOffre(): void {
    this.offreService.addOffreEmploi(this.nouvelleOffre).subscribe(
      (response) => {
        console.log("Offre d'emploi ajoutée avec succès", response);
        this.nouvelleOffre = new OffreEmploie();
      },
      (error) => {
        console.error("Erreur lors de l'ajout de l'offre d'emploi", error);
      }
    );
  }
}
