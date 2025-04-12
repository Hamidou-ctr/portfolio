import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {


  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
  goToHome() {
    this.location.go('/home');
  }
  goToPrivacyPolicy() {
    this.location.go('/privacy-policy');
  }
  goToLegalNotice() {
    this.location.go('/legal-notice');
  }
  goToTermsOfService() {
    this.location.go('/terms-of-service');
  }
  goToContact() {
    this.location.go('/contact');
  }
}
