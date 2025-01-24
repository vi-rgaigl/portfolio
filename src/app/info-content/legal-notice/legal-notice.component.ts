import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NewHorizontalScrollDirective } from '../../new-horizontal-scroll.directive';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, 
    TranslocoModule,
    NewHorizontalScrollDirective, 
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

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
