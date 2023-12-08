import {Component, OnInit} from '@angular/core';
import {Recruteur} from "../models/Recruteur.model";
import {Router} from "@angular/router";
import {RecruteurServiceService} from "../services/recruteur-service.service";

@Component({
  selector: 'app-update-recruteur',
  templateUrl: './update-recruteur.component.html',
  styleUrls: ['./update-recruteur.component.css']
})
export class UpdateRecruteurComponent implements OnInit{
  selectedFile: File | null = null;
  recruteur:Recruteur;
  imageSource:string;

  constructor(private service:RecruteurServiceService,private router:Router) {
  }
  ngOnInit(): void {
    // Récupération des données stockées dans le localStorage
    const recruteurData = localStorage.getItem('userr');
    if (recruteurData) {
      this.recruteur = JSON.parse(recruteurData);
      this.imageSource = `${this.recruteur.descPhoto},${this.recruteur.photoBase64}`;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.recruteur.photoBase64 = null;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.recruteur.descPhoto = e.target.result.split(',')[0];
        console.log( e.target.result.split(',')[0])

        this.recruteur.photoBase64 = e.target.result.split(',')[1];
        console.log(e.target.result.split(',')[1])
        this.imageSource = `${this.recruteur.descPhoto},${this.recruteur.photoBase64}`;
        console.log( this.imageSource)
      };
      reader.readAsDataURL(file);


    }
  }

  updateRecruiter(val:any){

    localStorage.setItem('userr', JSON.stringify(this.recruteur));

    this.service.updateRecruiter(this.recruteur).subscribe(response => {
    }, error => {
    });
    this.router.navigate(['homer'])
  }
}
