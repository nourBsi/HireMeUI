import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OffreEmploie} from "../models/OffreEmploie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OffreEmploiServiceService {

  constructor(private http: HttpClient) { }


  link="http://127.0.0.1:8080/api";
  getOffres():Observable<any>{
   return this.http.get(this.link+"/OffreEmplois");
  }
  ajouterFavoris(offre:OffreEmploie,id:number):Observable<any>{
    return this.http.put(this.link+"/addFavorite/"+id,offre);
  }
  removeFavoris(id_favoris: number, id_candidat: number): Observable<any> {
    return this.http.put(this.link+"/deleteFavorite/"+id_candidat,id_favoris);
  }

}
