import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Encuesta } from 'src/app/interfaces/encuesta.interface';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  public listaEncuestas: Encuesta[] = [];

  constructor(private auth: AuthService, private service: ServicesService) { }
  ngOnInit(): void {
    this.getEncuencuestasLista();
  }

  logout() {
    this.auth.logout()
  }

  getEncuencuestasLista() {
    return this.service.getListForm().subscribe({
      next: (resp) => {
        this.listaEncuestas = resp
      }, error: (err) => {
        this.listaEncuestas = []
      }
    })
  }

  deleteBrand(id: number) {
    if(id!==0){
      this.service.deleteForm(Number(id)).subscribe({
        next: () => {
          this.getEncuencuestasLista()
        }
      })
    }
    }

}
