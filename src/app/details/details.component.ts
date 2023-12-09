import { Component, OnInit  } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { Candidat } from '../models/Candidat.model';
import { CandidatureServiceService } from '../services/candidature-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  candidat: Candidat = new Candidat();
  candidats: Candidat[] = [];


constructor(private candidatureService: CandidatureServiceService) {}

ngOnInit(): void {
  this.candidatureService.getCandidatById(this.candidat.id_condidat).subscribe(
    response => {
      console.log(response);
      this.candidat = response; 
    },
    error => {
      console.error(error);
    }
  );
}

}
