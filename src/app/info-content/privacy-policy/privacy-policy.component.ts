import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule,TranslocoModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  currentLanguage: string = '';

    constructor(public translocoService: TranslocoService) {}

    ngOnInit() {
      let savedLang = localStorage.getItem('language');
      if (savedLang) {
        this.translocoService.setActiveLang(savedLang);
        this.currentLanguage = savedLang;
      } else {
        this.currentLanguage = this.translocoService.getActiveLang();
      }
    }

    toggleLanguage(lang: string) {
      this.currentLanguage = lang;
      this.translocoService.setActiveLang(lang);
      localStorage.setItem('language', lang);
    }
}
