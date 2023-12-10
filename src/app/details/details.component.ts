
import { Component, OnInit  } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { Candidat } from '../models/Candidat.model';
import { CandidatureServiceService } from '../services/candidature-service.service';
import { ActivatedRoute } from '@angular/router';
import {Candidature} from "../models/Candidature";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import * as FileSaver from 'file-saver';
import {saveAs} from "file-saver";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  candidat: Candidat = new Candidat();
  candidature: Candidature = new Candidature();
  imageSource:string;
  idCandidat:number;
  idcandidature:number;
  pdfData:string;
  pdfUrl: string;
constructor(private candidatureService: CandidatureServiceService,
  private route: ActivatedRoute,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Utilisez le service ActivatedRoute pour obtenir la valeur du paramètre 'id'
     this.idCandidat =  this.route.snapshot.params['id'];
    this.idcandidature =  this.route.snapshot.params['idcandidature'];



    if (this.idcandidature) {

      this.candidatureService.getCandidatureById(this.idcandidature).subscribe(
        response => {
          console.log(response);
          this.candidature = response;
         // const blobData: Blob=this.candidature.cv;
      //    const blobUrl: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blobData));

          // Convert SafeUrl to string
     //     this.pdfUrl = blobUrl.toString();
           },
        error => {
          console.error(error);
        }
      );
    }



    if (this.idCandidat) {

      this.candidatureService.getCandidatById(this.idCandidat).subscribe(
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
b64toblob(b64data, contentType,sliceSize){


}
  downloadPdf() {
    const blobData =DetailsComponent.b64toBlob(this.candidature.cv,'application/pdf',null);
    console.log(blobData)
    saveAs(blobData,this.candidature.cvFileName);
  }

  private static b64toBlob(b64Data , contentType , sliceSize) {
    contentType = contentType || 'application/pdf';
    sliceSize = sliceSize || 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
  }
}
