import { Injectable } from '@angular/core';
import {Candidat} from "../models/Candidat.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceCandidatService {

  constructor(private http: HttpClient) {
  }
  link="http://127.0.0.1:8080/api";

  signUp(candidat:Candidat): Observable<any>{
   // console.log(JSON.stringify(candidat));

    return this.http.post(this.link+"/addCandidat",candidat);

  }
  
}
