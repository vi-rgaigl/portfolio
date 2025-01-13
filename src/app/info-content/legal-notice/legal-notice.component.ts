import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslocoModule , FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  closeTab() {
    window.close();
  }

}
