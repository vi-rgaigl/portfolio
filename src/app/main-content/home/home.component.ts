import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentLanguage: string = 'de';

  constructor(private translocoService: TranslocoService) {}

  toggleLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translocoService.setActiveLang(this.currentLanguage);
  }
}
