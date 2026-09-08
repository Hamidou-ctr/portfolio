import { NgOptimizedImage } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { AvatarPlaceholder } from '../../shared/avatar-placeholder/avatar-placeholder';

@Component({
  selector: 'app-testimonials',
  imports: [AvatarPlaceholder, NgOptimizedImage],
  template: `
    @if (testimonials.length > 0) {
      <section
        id="testimonials"
        class="relative overflow-hidden py-20 text-white md:py-28"
        aria-label="Testimonials"
      >
        <img
          src="assets/img/green_shadow_reference.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none rotate-68 absolute top-0 -right-20 z-0 h-auto w-70 sm:w-80 sm:-top-10 sm:-right-35 max-w-none md:-top-20  md:w-90 md:-right-58 xl:w-110  2xl:w-120 2xl:h-80 2xl:top-10 2xl:-right-20 "
        />

        <div class="relative mx-auto max-w-360 px-6 md:px-8">
          <div class="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-14">
            <div
              class="relative order-1 h-36 w-36 flex-none md:order-2 md:h-48 md:w-48 lg:h-68 lg:w-68"
            >
              <div
                aria-hidden="true"
                class="absolute left-full top-1/2 h-0.75 w-screen -translate-y-1/2 bg-violet-500"
              ></div>
              <app-avatar-placeholder
                class="relative h-full w-full rounded-full border-[3px] border-violet-500"
              />
            </div>

            <div class="relative order-2 w-full max-w-215 md:order-1 md:min-w-0 md:flex-1">
              <img
                src="assets/img/purple_reference.png"
                alt=""
                aria-hidden="true"
                class="absolute -top-8 -left-2 z-10 w-16 bg-navy-900 md:-top-9 md:-left-8 md:w-22 lg:-left-14"
              />
              <div
                class="rounded-3xl border-[3px] border-accent-400 px-6 pt-8 pb-8 md:px-12 md:pt-10 md:pb-10 lg:min-h-68 lg:px-24 lg:pt-12 lg:pb-12"
              >
                <p class="text-base lg:text-xl">{{ active().quote }}</p>
                <div class="mt-8 flex flex-col gap-2 md:mt-10 md:flex-row md:items-center md:gap-4">
                  <span aria-hidden="true" class="h-0.5 w-14 bg-violet-500 md:flex-1"></span>
                  <span class="text-base md:whitespace-nowrap lg:text-lg">
                    {{ active().author }} - {{ active().role }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          @if (testimonials.length > 1) {
            <div class="mt-10 flex items-center justify-center gap-6 md:mt-12">
              <button
                type="button"
                aria-label="Previous testimonial"
                class="rounded-full p-1 ring-accent-400 transition hover:ring-2 focus-visible:ring-2"
                (click)="previous()"
              >
                <img ngSrc="assets/img/left.png" width="40" height="40" alt="" class="h-8 w-8" />
              </button>

              <div class="flex items-center gap-4">
                @for (item of testimonials; track item.author; let i = $index) {
                  <button
                    type="button"
                    class="h-2.5 w-2.5 rounded-full transition"
                    [class.bg-accent-400]="i === index()"
                    [class.bg-violet-500]="i !== index()"
                    [attr.aria-label]="'Show testimonial ' + (i + 1)"
                    [attr.aria-current]="i === index()"
                    (click)="index.set(i)"
                  ></button>
                }
              </div>

              <button
                type="button"
                aria-label="Next testimonial"
                class="rounded-full p-1 ring-accent-400 transition hover:ring-2 focus-visible:ring-2"
                (click)="next()"
              >
                <img ngSrc="assets/img/right.png" width="40" height="40" alt="" class="h-8 w-8" />
              </button>
            </div>
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
