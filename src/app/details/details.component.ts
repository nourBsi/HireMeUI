
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
  imageSource:string;
  id:number;
constructor(private candidatureService: CandidatureServiceService,
  private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Utilisez le service ActivatedRoute pour obtenir la valeur du paramètre 'id'
     this.id =  this.route.snapshot.params['id'];


    if (this.id) {

      this.candidatureService.getCandidatById(this.id).subscribe(
        response => {
          console.log(response);
          this.candidat = response;
          this.imageSource=`${this.candidat.descPhoto},${this.candidat.photoBase64}`;
          console.log(this.candidat)
        },
        error => {
          console.error(error);
        }
      );
    }

}
}
