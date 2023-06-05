import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';
import { InactivityService } from './services/inactivity.service';
import { AuthService } from './services/auth.service';
import { ConsultaComponent } from './components/consulta/consulta.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    PanelPrincipalComponent,
    ConsultaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatInputModule,ReactiveFormsModule,MatSelectModule,FormsModule,MatFormFieldModule,HttpClientModule
  ],
  providers: [InactivityService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
