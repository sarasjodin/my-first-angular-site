import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-first-angular-site';
  currentYear: number = new Date().getFullYear();
}
