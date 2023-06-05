import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private auth: AuthService,private router:Router) {}
  @Input() isPanel : boolean = false

  logout() {
    this.auth.logout();
  }

  back(){
    this.router.navigate(['/panel'])
  }
}
