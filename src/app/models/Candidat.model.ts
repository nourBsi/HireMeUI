import {OffreEmploie} from "./OffreEmploie";

export class Candidat {
  id_candidat: number;
  prenom: string;
  nom: string;
  email: string;
  mdp: string;
  tel: number;
  secteur: string;
  description: string;
  date_naissance: Date;
  descPhoto:String;
  Entreprise:String
  photoBase64: File|null;
  date_inscri:Date;
  favoris:OffreEmploie[];
  constructor() {
  }
}

