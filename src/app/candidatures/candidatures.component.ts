import {Component, OnInit, ViewChild} from '@angular/core';
import {Candidature} from "../models/Candidature";
import {CandidatureServiceService} from "../services/candidature-service.service";
import {Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {Table} from "primeng/table";

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit{
  candidatures: Candidature[];
  @ViewChild('dt') table: Table;
  clonedCandidatures: { [s: string]: Candidature } = {};
  constructor(private primengConfig: PrimeNGConfig,private candidatureService:CandidatureServiceService,private router: Router) {
  }
  ngOnInit() {
    this.candidatureService.getCandidatures().subscribe(data => {
      this.candidatures = data;
    for(let i= 0; i<=data.length;i++){
      this.candidatures[i].candidat=data[i].candidat;
      this.candidatures[i].offre=data[i].offre;
      }
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
