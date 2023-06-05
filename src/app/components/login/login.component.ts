import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formulario: FormGroup;

  constructor(private auth: AuthService, private service: ServicesService) {
    this.formulario = new FormGroup({
      username: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }


  onSubmit() {
     this.service.login(this.formulario.value).subscribe({
       next: (resp) => {
         if (resp) {
           this.auth.login();
         }
       }
     })
   
   // this.auth.login();
  }


}

