import {Component, OnInit, ViewChild} from '@angular/core';
import {Candidature} from "../models/Candidature";
import {CandidatureServiceService} from "../services/candidature-service.service";
import {Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {Table} from "primeng/table";
import {Recruteur} from "../models/Recruteur.model";

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit{
  candidatures: Candidature[]= [];
  loggedRecruiter: Recruteur| null = null;
  @ViewChild('dt') table: Table;
  clonedCandidatures: { [s: string]: Candidature } = {};
  constructor(private primengConfig: PrimeNGConfig,private candidatureService:CandidatureServiceService,private router: Router) {
  }
  ngOnInit() {
    const loggedRecruiterString = localStorage.getItem('userr');

    if (loggedRecruiterString) {
      this.loggedRecruiter = JSON.parse(loggedRecruiterString);
    }
    this.candidatureService.getCandidatures().subscribe(data => {
      for(let i=0;i<data.length;i++){
        console.log(data[i].offreEmploie.recruteur.id_recruteur)
        console.log(data[i])

        if(data[i].offreEmploie.recruteur.id_recruteur==this.loggedRecruiter?.id_recruteur){
          this.candidatures = [...this.candidatures, data[i]];

        }
      }


  /*  for(let i= 0; i<=data.length;i++){
      this.candidatures[i].candidat=data[i].candidat;
      this.candidatures[i].offre=data[i].offre;
      }*/

    });
    this.primengConfig.ripple = true;
  }
  navigateToDetails(id:number){
this.router.navigate(['detailsCandidat']);
  }
  onRowEditInit(candidature:Candidature,index :number){
  this.clonedCandidatures[index]={ ...this.candidatures[index]}
  }
  onRowEditSave(candidature:Candidature,index :number){
this.candidatureService.updateCandidature(candidature).subscribe(
  (response)=>{
    console.log("state changed successfully!");
  },
(error)=>{
      console.log("An error occured!");

    }
)
    //fonction update etat

  }
  onRowEditCancel(candidature:Candidature,index :number){
    this.candidatures[index] = this.clonedCandidatures[index];
    delete this.clonedCandidatures[index];
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.table.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
