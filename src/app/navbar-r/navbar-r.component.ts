import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-r',
  templateUrl: './navbar-r.component.html',
  styleUrls: ['./navbar-r.component.css']
})
export class NavbarRComponent {
  constructor(private  router: Router) {
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['join-us']);
  }
}
