import {Component, forwardRef, OnInit} from '@angular/core';
import {OffreEmploiServiceService} from "../services/offre-emploi-service.service";
import {OffreEmploie} from "../models/OffreEmploie";
import {Recruteur} from "../models/Recruteur.model";
import {Candidat} from "../models/Candidat.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:OffreEmploiServiceService) {}
  Offres:OffreEmploie[];
  offre:OffreEmploie;
  candidat:Candidat;
  offreFav:OffreEmploie;
  ngOnInit() {
    this.service.getOffres().subscribe((data: OffreEmploie[]) => {
        this.Offres=data;
        console.log(this.Offres);
    });

    }

postuler(){}
favoris(id_favoris:number){
  const storedCandidat = localStorage.getItem('user');

  if (storedCandidat) {
    this.candidat = JSON.parse(storedCandidat);
    for(let i=0;i<this.Offres.length;i++){
      if(this.Offres[i].id_offre==id_favoris){
         this.offreFav= this.Offres[i];
      }
    }
    this.service.ajouterFavoris(this.offreFav,this.candidat.id_candidat).subscribe(
      (response)=>{
  console.log("added to favorites")
      },
      (error) =>{

      }
    );

    this.candidat.favoris.push(this.offreFav);
    console.log(this.candidat.favoris)
    localStorage.setItem('user',JSON.stringify(this.candidat))

  }

}
}
