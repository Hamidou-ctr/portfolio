import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  template: `
    <section id="about" class="scroll-mt-20 bg-[#141D2F] py-20 md:py-28">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center lg:px-10">
        <div>
          <h2 class="font-heading text-3xl font-bold text-ink sm:text-4xl">{{ t().about.eyebrow }}</h2>
          <p class="mt-4 text-muted">{{ t().about.intro }}</p>

          <ul class="mt-8 space-y-5">
            @for (bullet of t().about.bullets; track bullet) {
              <li class="flex gap-3">
                <span
                  class="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-400/15 text-accent-600"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-3.5 w-3.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm text-muted">{{ bullet }}</span>
              </li>
            }
          </ul>
        </div>

        <div class="flex justify-center md:justify-end">
          <div class="relative h-56 w-56 sm:h-72 sm:w-72">
            <div class="absolute -inset-16 -z-10" aria-hidden="true">
              <img ngSrc="assets/img/purple-shadow-about.png" fill class="object-contain" alt="" />
            </div>
            <img
              ngSrc="assets/img/profil1.png"
              fill
              class="rounded-full object-cover ring-4 ring-accent-400/60"
              [alt]="'Portrait of ' + profile.name"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly profile = PROFILE;
}
