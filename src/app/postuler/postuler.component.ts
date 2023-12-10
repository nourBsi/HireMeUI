import { Component, OnInit } from '@angular/core';
import { CandidatureServiceService } from '../services/candidature-service.service';
import { Candidature } from '../models/Candidature';
import {OffreEmploiServiceService} from "../services/offre-emploi-service.service";
import {Candidat} from "../models/Candidat.model";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  constructor(private candidatureService: CandidatureServiceService,private serviceOffre:OffreEmploiServiceService,private route:ActivatedRoute,public datepipe: DatePipe) {}
  candidature: Candidature = new Candidature();
    cvFileName: '';
    candidat: Candidat;
    idOffre:number;
  selectedFile: File | null = null;


  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.candidature.cvFileName = file.name;

      const reader = new FileReader();
      reader.onload = (e) => {
        // e.target.result contains the base64-encoded string
       let cvData=e.target.result as string;
        this.candidature.cv = cvData.split(',')[1]
        console.log(this.candidature);
      };

      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
      // Handle the case where no file is selected
    }
  }
  ngOnInit() {
    console.log('Le composant Postuler a été initialisé.');
    const storedCandidat = localStorage.getItem('user');
    this.idOffre =  this.route.snapshot.params['id'];

    if (storedCandidat) {
      this.candidat = JSON.parse(storedCandidat);
      this.candidature.candidat=this.candidat;
      this.candidature.statut=0;
      this.serviceOffre.getOffre(this.idOffre).subscribe(
        (data)=>{
          this.candidature.offre=data;
        }
      );
      this.candidature.date=new Date();
      this.datepipe.transform(this.candidature.date, 'yyyy-MM-dd')
      console.log(this.candidature)

    }
  }


  postuler() {
    const date=new Date();
    this.datepipe.transform(date, 'yyyy-MM-dd')
    console.log(this.selectedFile)
    this.candidatureService.addCandidature(date,this.candidature.statut,this.candidat.id_candidat,this.candidature.offre.id_offre,this.candidature.cv, this.candidature.cvFileName ).subscribe(
      response => {
        console.log('Candidature ajoutée avec succès', response);

      },
      error => {
        console.error('Erreur lors de l\'ajout de la candidature', error);
      }
    );
  }
}
