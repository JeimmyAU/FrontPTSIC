import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';
import { AuthGuard } from './services/auth-guard.service';
import { ConsultaComponent } from './components/consulta/consulta.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: LoginComponent,
  },
  {path:'panel',component:PanelPrincipalComponent,canActivate:[AuthGuard]},
  {
    path: 'formulario',
    component: FormularioComponent,canActivate:[AuthGuard],
  },
  {
    path: 'consulta',
    component: ConsultaComponent,canActivate:[AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
