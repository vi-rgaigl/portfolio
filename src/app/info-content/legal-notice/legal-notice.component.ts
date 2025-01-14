import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslocoModule ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  currentLanguage: string = 'en';

    constructor(public translocoService: TranslocoService) {}

    toggleLanguage(lang: string) {
      this.currentLanguage = lang;
      this.translocoService.setActiveLang(this.currentLanguage);
    }

  closeTab() {
    window.close();
  }

}
