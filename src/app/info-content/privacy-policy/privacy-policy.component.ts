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
