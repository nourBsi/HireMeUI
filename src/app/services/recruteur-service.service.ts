import { Injectable } from '@angular/core';
import {Candidat} from "../models/Candidat.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Recruteur} from "../models/Recruteur.model";

@Injectable({
  providedIn: 'root'
})
export class RecruteurServiceService {
  link="http://127.0.0.1:8080/api";

  constructor(private http: HttpClient) { }
  signUpr(recruteur:Recruteur): Observable<any>{
    // console.log(JSON.stringify(candidat));

    return this.http.post(this.link+"/addRecruteur",recruteur);

  }
}
