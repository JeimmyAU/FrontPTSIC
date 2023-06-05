import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private isLoggedInFlag: boolean = false;
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedInFlag);
  isLoggedInValue = this.isLoggedInSubject.asObservable();

  constructor(private router:Router) { 
    this.isLoggedInFlag = localStorage.getItem('isLoggedInFlag') === 'true' ? true:false;
    if(!this.isLoggedInFlag ){
      this.logout()
    }
  }



  login() {
    this.isLoggedInFlag = true;
    localStorage.setItem('isLoggedInFlag', 'true');
    this.isLoggedInSubject.next(this.isLoggedInFlag);
    this.router.navigate(['/panel'])
  }

  logout() {
    this.isLoggedInFlag = false;
    localStorage.setItem('isLoggedInFlag', 'false');
    this.isLoggedInSubject.next(this.isLoggedInFlag);
    this.router.navigate(['/login'])
  }
}