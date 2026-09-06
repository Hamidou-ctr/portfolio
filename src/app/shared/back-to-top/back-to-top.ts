import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [NgOptimizedImage],
  template: `
    @if (visible()) {
      <button
        type="button"
        aria-label="Back to top"
        class="fixed bottom-6 right-6 z-40 rounded-full shadow-lg transition hover:-translate-y-0.5"
        (click)="scrollToTop()"
      >
        <img ngSrc="assets/img/go_up_button.png" width="39" height="39" alt="" class="h-10 w-10" />
      </button>
    }
  `,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class BackToTop {
  private readonly document = inject(DOCUMENT);
  protected readonly visible = signal(false);

  protected onScroll(): void {
    this.visible.set(this.document.defaultView!.scrollY > 600);
  }

  protected scrollToTop(): void {
    this.document.defaultView!.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
