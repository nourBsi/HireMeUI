import { Component } from '@angular/core';
import { Candidat } from '../models/Candidat.model';
import {HttpClient} from "@angular/common/http";
import {ServiceCandidatService} from "../services/service-candidat.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent {
  startDate: Date;
  selectedFile: File | null = null;

  candidat: Candidat = new Candidat();
  constructor(private service:ServiceCandidatService,private router:Router) {}
imageSource:string;

  ngOnInit(): void {
    // Récupération des données stockées dans le localStorage
    const candidatData = localStorage.getItem('user');
    if (candidatData) {
      this.candidat = JSON.parse(candidatData);
      this.imageSource = `${this.candidat.descPhoto},${this.candidat.photoBase64}`;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.candidat.photoBase64 = null;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.candidat.descPhoto = e.target.result.split(',')[0];
        console.log( e.target.result.split(',')[0])

        this.candidat.photoBase64 = e.target.result.split(',')[1];
        console.log(e.target.result.split(',')[1])
        this.imageSource = `${this.candidat.descPhoto},${this.candidat.photoBase64}`;
        console.log( this.imageSource)
      };
      reader.readAsDataURL(file);


    }
  }


  updateCandidate(val:any){

    localStorage.setItem('user', JSON.stringify(this.candidat));

    this.service.updateCandidate(this.candidat).subscribe(response => {
    }, error => {
    });
    this.router.navigate(['home'])
  }

}
