import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  modules = ['Dashboard', 'Bookings', 'Valet Team', 'Reports', 'Settings'];
  active = 'Dashboard';

  constructor(private readonly router: Router) {}

  logout(): void {
    void this.router.navigateByUrl('/login');
  }
}
