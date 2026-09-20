import { Component, input } from '@angular/core';
import { LegalSection } from '../../core/i18n/translations';

@Component({
  selector: 'app-legal-document',
  template: `
    <main class="mx-auto max-w-3xl px-6 py-20 lg:px-10">
      <h1
        class="font-heading text-2xl font-bold tracking-tight wrap-break-word text-ink sm:text-3xl sm:tracking-normal"
      >
        {{ title() }}
      </h1>

      @if (introduction(); as introductionText) {
        <p class="mt-6 text-muted">{{ introductionText }}</p>
      }

      <div class="mt-8 space-y-8">
        @for (section of sections(); track section.heading) {
          <section>
            <h2 class="font-heading text-lg font-semibold text-ink">{{ section.heading }}</h2>
            <p class="mt-2 whitespace-pre-line text-muted">{{ section.body }}</p>
          </section>
        }
      </div>

      <p class="mt-10 text-muted">{{ lastUpdated() }}</p>
    </main>
  `,
})
export class LegalDocument {
  readonly title = input.required<string>();
  readonly introduction = input<string>();
  readonly sections = input.required<LegalSection[]>();
  readonly lastUpdated = input.required<string>();
}
