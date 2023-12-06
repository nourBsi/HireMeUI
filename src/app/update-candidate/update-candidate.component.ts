import { Component } from '@angular/core';
import { Candidat } from '../models/Candidat.model';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent {
  candidat: Candidat = new Candidat();
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Récupération des données stockées dans le localStorage
    const candidatData = localStorage.getItem('user');
    if (candidatData) {
      this.candidat = JSON.parse(candidatData);
    }
  }
  getImageFromLocalStorage(): string {
    // Remplacez "chemin_image_localstorage" par la clé réelle que vous utilisez pour stocker le chemin de l'image dans le localStorage
    const imagePath = localStorage.getItem('user.photoBase64');
    return imagePath || '././assets/img/noprofil.jpg'; // Utilisez une image par défaut si le chemin n'est pas trouvé
  }

  updateCandidate(): void {
    // Mettre à jour les données dans le localStorage
    localStorage.setItem('user', JSON.stringify(this.candidat));

    // Simuler une mise à jour côté serveur avec HttpClient
    const apiUrl = 'http://127.0.0.1:8080/api/';
    this.http.put(apiUrl, this.candidat).subscribe(response => {
      console.log('Candidat mis à jour avec succès dans la base de données', response);
    }, error => {
      console.error('Erreur lors de la mise à jour du candidat dans la base de données', error);
    });
  }
}
