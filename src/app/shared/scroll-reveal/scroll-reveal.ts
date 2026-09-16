import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

export type ScrollRevealEffect =
  'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';

@Directive({
  selector: '[appScrollReveal]',
  host: {
    class: 'scroll-reveal',
    '[attr.data-scroll-reveal-effect]': 'effect()',
    '[class.scroll-reveal-visible]': 'isVisible()',
    '[style.transition-delay.ms]': 'delay()',
  },
})
export class ScrollReveal {
  readonly effect = input<ScrollRevealEffect>('fade-up', { alias: 'appScrollReveal' });
  readonly delay = input(0);
  readonly once = input(true);

  protected readonly isVisible = signal(false);

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const element = this.elementRef.nativeElement;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.isVisible.set(true);
              if (this.once()) {
                observer.unobserve(element);
              }
            } else if (!this.once()) {
              this.isVisible.set(false);
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
      );

      observer.observe(element);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
