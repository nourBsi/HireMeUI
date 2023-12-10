import {Recruteur} from "./Recruteur.model";

export class OffreEmploie{
  id_offre:number;
  titre:string;
  description:string;
  lieu:string;
  date_expiration:Date;
  nom_societe:string;
  niveau_etude:string;
  nbr_max_candidats:number;
  nbr_post:number;
  etat:number;
  recruteur:Recruteur;
}
