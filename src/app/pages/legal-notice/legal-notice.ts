import { Component, inject } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-legal-notice',
  imports: [Header, Footer],
  template: `
    <app-header />
    <main class="mx-auto max-w-3xl px-6 py-20 lg:px-10">
      <h1 class="font-heading text-3xl font-bold text-ink">{{ t().legal.title }}</h1>

      <div class="mt-8 space-y-8">
        @for (section of t().legal.sections; track section.heading) {
          <section>
            <h2 class="font-heading text-lg font-semibold text-ink">{{ section.heading }}</h2>
            <p class="mt-2 whitespace-pre-line text-muted">{{ section.body }}</p>
          </section>
        }
      </div>
    </main>
    <app-footer />
  `,
})
export class LegalNotice {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
}
