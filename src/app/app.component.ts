import { Component } from '@angular/core';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AsidebarComponent } from './shared/asidebar/asidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AsidebarComponent, FooterComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world-angular';
}
