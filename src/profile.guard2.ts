import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard2 implements CanActivate {
  constructor(private router:Router) {

  }
  canActivate(): boolean {
    if(window.localStorage.getItem('userr')!=null){
      return true;
    }else{
      this.router.navigate(['join-us']);
      return false;
    }
    //   return true;
  }
}
