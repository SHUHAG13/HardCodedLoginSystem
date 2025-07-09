import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedSubject=new BehaviorSubject<boolean>(this.isLoggedIn());
  loggedIn$=this.loggedSubject.asObservable();
  constructor() { }
  private isLoggedIn():boolean{
  return !!localStorage.getItem('angular20User');
  }
  login(username:string,password:string):boolean{
    if(username==='Admin'&& password==='12345')
    {
    localStorage.setItem('angular20User','Admin');
    this.loggedSubject.next(true);
    return true;
      

    }
    return false;
    }
    logout(){
      localStorage.removeItem('angular20User');
      this.loggedSubject.next(false);
    }
}
