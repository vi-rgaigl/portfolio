import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentLanguage: string = 'de';

  toggleLanguage(language: string) {
    this.currentLanguage = language;
    // Add any additional logic for language change here
  }
}
