import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Candidature} from "../models/Candidature";

@Injectable({
  providedIn: 'root'
})
export class CandidatureServiceService {

  constructor(private http: HttpClient) { }
  link="http://127.0.0.1:8080/api";

  getCandidatures(): Observable<any>{
    return this.http.get(this.link+"/Candidatures");
  }

  updateCandidature(candidature:Candidature): Observable<any>{
    return this.http.put(this.link+"/updateCandidature",candidature);
  }
  getCandidatById(id: number): Observable<any> {
    return this.http.get(this.link + "/Candidats/" + id);
  }
  getCandidatureById(id: number): Observable<any> {
    return this.http.get(this.link + "/Candidatures/" + id);
  }
  addCandidature(candidature: Candidature, cvFile: File): Observable<any> {
    // Créez un objet FormData pour envoyer le formulaire avec le fichier
    const formData = new FormData();
    formData.append('cvFile', cvFile);
    formData.append('candidature', JSON.stringify(candidature));

    // Ajoutez les en-têtes nécessaires pour le téléchargement de fichiers
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    // Envoyez la requête POST avec les données du formulaire
    return this.http.post(this.link + "/addCandidature", formData, { headers: headers });
  }
}
