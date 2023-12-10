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
  addCandidature(
    date: Date,
    statut: number,
    candidatId: number,
    offreId: number,
    cvFile: string,
    cvFileName:string

  ): Observable<any> {
    // Create FormData for sending the form with the file
    const formData = new FormData();
    const formattedDate = date.toISOString().split('T')[0];
    // Set the parameters
    formData.append('date', formattedDate);
    formData.append('statut', statut.toString());
    formData.append('candidatId', candidatId.toString());
    formData.append('offreId', offreId.toString());
    formData.append('cvFile', cvFile)
    formData.append('cvFileName' ,cvFileName);


    // Set the headers
    const headers = {};


    return this.http.post<any>(`${this.link}/addCandidature`, formData, { headers });
  }

}
