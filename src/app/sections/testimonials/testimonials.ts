import { NgOptimizedImage } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { AvatarPlaceholder } from '../../shared/avatar-placeholder/avatar-placeholder';

@Component({
  selector: 'app-testimonials',
  imports: [AvatarPlaceholder, NgOptimizedImage],
  template: `
    @if (testimonials.length > 0) {
      <section class="bg-white pb-20 md:pb-28" aria-label="Testimonials">
        <div class="mx-auto flex max-w-2xl items-center gap-4 px-6 lg:px-10">
          @if (testimonials.length > 1) {
            <button type="button" aria-label="Previous testimonial" (click)="previous()">
              <img ngSrc="assets/img/left.png" width="40" height="40" alt="" class="h-8 w-8" />
            </button>
          }

          <div
            class="relative flex-1 rounded-3xl border-2 border-accent-400 p-8 text-center sm:p-10"
          >
            <span
              class="absolute left-6 top-2 font-heading text-6xl text-accent-400/30"
              aria-hidden="true"
              >&ldquo;</span
            >

            <p class="relative text-lg italic text-ink">{{ active().quote }}</p>

            <div class="mt-6 flex flex-col items-center gap-2">
              <div class="h-14 w-14">
                <app-avatar-placeholder class="h-full w-full rounded-full ring-2 ring-violet-400" />
              </div>
              <p class="text-sm font-semibold text-ink">
                {{ active().author }} &middot; {{ active().role }}
              </p>
            </div>

            @if (testimonials.length > 1) {
              <div class="mt-6 flex justify-center gap-2">
                @for (item of testimonials; track item.author; let i = $index) {
                  <button
                    type="button"
                    class="h-2.5 w-2.5 rounded-full transition"
                    [class.bg-accent-400]="i === index()"
                    [class.bg-slate-200]="i !== index()"
                    [attr.aria-label]="'Show testimonial ' + (i + 1)"
                    [attr.aria-current]="i === index()"
                    (click)="index.set(i)"
                  ></button>
                }
              </div>
            }
          </div>

          @if (testimonials.length > 1) {
            <button type="button" aria-label="Next testimonial" (click)="next()">
              <img ngSrc="assets/img/right.png" width="40" height="40" alt="" class="h-8 w-8" />
            </button>
          }
        </div>
      </section>
    }
  `,
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
  protected readonly index = signal(0);
  protected readonly active = computed(() => this.testimonials[this.index()]);

  protected previous(): void {
    this.index.update((i) => (i === 0 ? this.testimonials.length - 1 : i - 1));
  }

  protected next(): void {
    this.index.update((i) => (i === this.testimonials.length - 1 ? 0 : i + 1));
  }
}
