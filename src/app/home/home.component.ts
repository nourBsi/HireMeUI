import {Component, OnInit} from '@angular/core';
import {OffreEmploiServiceService} from "../services/offre-emploi-service.service";
import {OffreEmploie} from "../models/OffreEmploie";
import {Recruteur} from "../models/Recruteur.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:OffreEmploiServiceService) {}
  Offres:OffreEmploie[];
  offre:OffreEmploie;
  ngOnInit() {
    this.service.getOffres().subscribe((data: OffreEmploie[]) => {
        this.Offres=data;
        console.log(this.Offres);
    });

    }

postuler(){}
}
