import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private router:Router) {

  }
  canActivate(): boolean {
    if(window.localStorage.getItem('user')!=null){
      return true;
    }else{
      this.router.navigate(['join-us']);
      return false;
    }
    //   return true;
  }
}
