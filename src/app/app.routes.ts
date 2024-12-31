import { Routes } from '@angular/router';
import { HomeComponent } from './main-content/home/home.component';
import { LegalNoticeComponent } from './info-content/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './info-content/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
