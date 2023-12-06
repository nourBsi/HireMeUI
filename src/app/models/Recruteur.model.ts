export class Recruteur {
  id_recruteur: number;
  prenom: string;
  nom: string;
  email: string;
  mdp: string;
  tel: number;
  secteur: string;
  description: string;
  date_naissance: Date;
  descPhoto:string;
  photoBase64: File|null;
  entreprise:string;
  date_inscri:Date;
  constructor() {
  }
}

