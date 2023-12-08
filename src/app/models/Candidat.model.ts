export class Candidat {
  id_condidat: number;
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
  constructor() {
  }
}

