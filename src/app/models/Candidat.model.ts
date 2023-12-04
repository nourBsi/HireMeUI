export class Candidat {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  mdp: string;
  tel: number;
  secteur: string;
  description: string;
  date_naissance: Date;
  photoBase64: File|null;

  constructor() {
  }
}

