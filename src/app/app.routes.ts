import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './info-content/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './info-content/privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content/main-content.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
