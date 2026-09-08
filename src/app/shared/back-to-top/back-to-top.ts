import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [NgOptimizedImage],
  template: `
    <button
      type="button"
      aria-label="Back to top"
      class="rounded-full transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent-400"
      (click)="scrollToTop()"
    >
      <img ngSrc="assets/img/go-up-button.png" width="39" height="39" alt="" class="h-10 w-10" />
    </button>
  `,
  host: { class: 'inline-block' },
})
export class BackToTop {
  private readonly document = inject(DOCUMENT);

  protected scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
