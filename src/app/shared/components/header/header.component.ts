import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.translocoService.setActiveLang(savedLang);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('language', lang);
  }
}
