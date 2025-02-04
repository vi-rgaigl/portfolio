import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentLanguage: string = 'en';

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    let savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.translocoService.setActiveLang(savedLang);
    }
  }

  toggleLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translocoService.setActiveLang(this.currentLanguage);
    localStorage.setItem('language', lang);
  }
}
