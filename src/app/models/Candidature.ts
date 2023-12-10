import {Candidat} from "./Candidat.model";
import {OffreEmploie} from "./OffreEmploie";

export class Candidature{
  date:Date;
  statut:number;
  cv:string;
  cvFileName:string;
  candidat:Candidat;
  offre: OffreEmploie;
}
