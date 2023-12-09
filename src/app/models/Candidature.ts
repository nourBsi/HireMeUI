import {Candidat} from "./Candidat.model";
import {OffreEmploie} from "./OffreEmploie";

export class Candidature{
  date:Date;
  statut:number;
  cv:Blob;
  cvFileName:string;
  candidat:Candidat;
  offre: OffreEmploie;
}
