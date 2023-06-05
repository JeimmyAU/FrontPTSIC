import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { Brands } from 'src/app/interfaces/params.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup;
  public marcas: Brands[]=[];
  constructor(private auth:AuthService, private service : ServicesService,private router : Router) {
    this.formulario = new FormGroup({
      numeroDocumento: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
      email: new FormControl('', [Validators.required,Validators.email]),
      comentarios: new FormControl(''),
      marcaFavoritaPc: new FormControl('',Validators.required)
    });
  }
  ngOnInit(): void {
    this.getParametros();
  }

  logout(){
    this.auth.logout()
  }

  onSubmit(){
    this.service.saveForm({ ...this.formulario.value,'fechaRespuesta':new Date()}).subscribe({
      next:(resp)=>{
        this.router.navigate(['/panel'])
      }
    })
  }

  getParametros(){
    this.service.getParameters().subscribe({
      next:(resp)=>{
        this.marcas= resp;
      },error:()=>{
        this.marcas =[];
      }
    })
  }
}
