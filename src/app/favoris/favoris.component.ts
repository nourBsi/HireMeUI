import {Component, OnInit} from '@angular/core';
import {OffreEmploie} from "../models/OffreEmploie";
import {Candidat} from "../models/Candidat.model";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit{
  candidat:Candidat;
  ngOnInit() {
    const storedCandidat = localStorage.getItem('user');

    if (storedCandidat) {
      this.candidat = JSON.parse(storedCandidat);
    }
  }

  remove(id:number){

  }
  postuler(){

  }
}
