import { Component, inject } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { LanguageService } from '../../core/i18n/language.service';
import { LegalDocument } from '../../shared/legal-document/legal-document';

@Component({
  selector: 'app-privacy-policy',
  imports: [Header, Footer, LegalDocument],
  template: `
    <app-header />
    <app-legal-document
      [title]="t().privacy.title"
      [introduction]="t().privacy.introduction"
      [sections]="t().privacy.sections"
      [lastUpdated]="t().privacy.lastUpdated"
    />
    <app-footer />
  `,
})
export class PrivacyPolicy {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
}
