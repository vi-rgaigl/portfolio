import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslocoModule, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  closeTab() {
    window.close();
  }
}
