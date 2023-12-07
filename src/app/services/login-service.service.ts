import { Injectable } from '@angular/core';
import {Candidat} from "../models/Candidat.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Recruteur} from "../models/Recruteur.model";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }


  linkc="http://127.0.0.1:8080/api";


  checkCandidate(candidat:Candidat): Observable<any>{
    return this.http.post(this.linkc+"/loginCandidat",candidat);

  }
  checkRecruteur(recruteur:Recruteur):Observable<any>{
    return this.http.post(this.linkc+"/loginRecruteur",recruteur);

  }

 
}
