import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InactivityService } from 'src/app/services/inactivity.service';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css'],
})
export class PanelPrincipalComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private inactivityService: InactivityService
  ) {}



  redirect(isForm: boolean) {
    isForm
      ? this.router.navigate(['/formulario'])
      : this.router.navigate(['/consulta']);
  }

  logout() {
    this.auth.logout();
  }
}
