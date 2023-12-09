import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
}
