import { Injectable, HostListener } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private inactivityTime: number = 0;

  constructor(private authService: AuthService) {}

  resetTimer() {
    clearTimeout(this.inactivityTime);
    this.inactivityTime = setTimeout(() => {
      this.authService.logout();
    }, 30000) as unknown as number;
  }
}