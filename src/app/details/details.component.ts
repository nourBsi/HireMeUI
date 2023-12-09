
import { Component, OnInit  } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { Candidat } from '../models/Candidat.model';
import { CandidatureServiceService } from '../services/candidature-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  candidat: Candidat = new Candidat();
  candidats: Candidat[] = [];


constructor(private candidatureService: CandidatureServiceService,
  private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Utilisez le service ActivatedRoute pour obtenir la valeur du paramètre 'id'
    const id = this.route.snapshot.paramMap.get('id');


    if (id) {
      const idNumber = +id;
      this.candidatureService.getCandidatById(idNumber).subscribe(
        response => {
          console.log(response);
          this.candidats = response; 
        },
        error => {
          console.error(error);
        }
      );
    }

}
}
