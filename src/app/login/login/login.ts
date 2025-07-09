import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  router=inject(Router);
  logInobj:any={
   username:'',
   password:'' 
  }
  loginService=inject(LoginService);
  Login(){
    const{username,password}=this.logInobj;
    if(this.loginService.login(username,password)){
      this.router.navigateByUrl("/dashboard");

    }else{
      alert("Wrong Credentials..!");
    }
  }
  
}

   

