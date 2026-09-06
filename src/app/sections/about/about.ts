import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  template: `
    <section
      id="about"
      class="relative scroll-mt-24 overflow-hidden bg-navy-900 pb-24 pt-10 text-white md:pt-12"
    >
      <div class="mx-auto grid max-w-360 gap-16 px-8 md:grid-cols-2 md:items-center">
        <div class="max-w-141">
          <h2 class="font-heading text-3xl font-bold leading-none sm:text-5xl lg:text-[64px]">
            {{ t().about.eyebrow }}
          </h2>
          <p class="mt-6 text-base md:text-xl">{{ t().about.intro }}</p>

          <ul class="mt-10 flex flex-col gap-10 md:mt-12 md:gap-12">
            @for (bullet of t().about.bullets; track $index; let i = $index) {
              <li class="flex items-center gap-6 md:gap-8">
                <img
                  [ngSrc]="'assets/img/' + icons[i] + '.png'"
                  width="48"
                  height="48"
                  alt=""
                  class="h-8 w-8 flex-none md:h-10 md:w-10"
                />
                <p class="max-w-122 text-base md:text-xl">{{ bullet }}</p>
              </li>
            }
          </ul>
        </div>

        <div class="hidden md:flex justify-center">
          <div class="relative h-60 w-60 sm:h-75 sm:w-75 lg:h-90 lg:w-90">
            <img
              src="assets/img/purple-shadow-about.png"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute left-1/2 top-1/2 z-0 h-130 w-250 max-w-none -translate-y-1/2 object-fill"
            />
            <div
              aria-hidden="true"
              class="absolute left-full top-1/2 z-0 h-0.75 w-screen -translate-y-1/2 bg-accent-400"
            ></div>
            <img
              ngSrc="assets/img/profil2.png"
              fill
              class="z-10 rounded-full border-[3px] border-accent-400 object-cover"
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
  protected readonly icons = ['location', 'bulb_desktop', 'puzzle_desktop'];
}
