import { Component,OnInit,HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InactivityService } from 'src/app/services/inactivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private auth:AuthService, private inactivityService:InactivityService,private router:Router){

  }
  @HostListener('window:mousemove')
  @HostListener('window:keypress')
  refreshInactiveTime() {
    this.inactivityService.resetTimer();
  }
  ngOnInit(): void {
    this.auth.isLoggedInValue.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.inactivityService.resetTimer();
      }
    });
  }
  title = 'prueba-tecnica';
}
