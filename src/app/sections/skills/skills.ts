import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { SKILLS, ADDITIONAL_SKILLS } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <section
      id="skills"
      class="relative scroll-mt-20 overflow-hidden bg-navy-900 py-20 text-white md:scroll-mt-24 md:py-28"
    >
      <img
        src="assets/img/green_shadow_skills_portfolio.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute top-1/2 -left-28 z-0 w-72 max-w-none -translate-y-1/2 md:top-auto md:-bottom-40 md:-left-40 md:w-140 md:translate-y-0"
      />

      <div
        class="relative mx-auto grid max-w-360 gap-12 px-6 md:grid-cols-[1.1fr_1fr] md:gap-x-16 md:px-8"
      >
        <div class="text-center md:col-start-2 md:row-start-1 md:text-left">
          <div class="relative inline-block">
            <h2 class="font-heading text-3xl font-bold leading-none sm:text-5xl lg:text-[64px]">
              {{ t().skills.title }}
            </h2>
            <span
              aria-hidden="true"
              class="absolute left-full top-1/2 ml-6 hidden h-0.75 w-screen -translate-y-1/2 bg-violet-500 md:block"
            ></span>
          </div>
          <p class="mx-auto mt-4 max-w-md text-base md:mx-0 md:text-lg">
            {{ t().skills.subtitle }}
          </p>
        </div>

        <ul
          class="grid grid-cols-3 gap-x-4 gap-y-8 md:col-start-1 md:row-span-2 md:row-start-1 md:grid-cols-4 md:gap-y-10 md:self-center"
        >
          @for (skill of skills; track skill.name) {
            <li class="flex flex-col items-center gap-2 text-center">
              @if (skill.icon === 'supabase') {
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  class="h-15 w-15"
                  aria-hidden="true"
                >
                  <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              } @else {
                <img
                  [ngSrc]="'assets/img/' + skill.icon + '_icons.png'"
                  width="60"
                  height="60"
                  alt=""
                  class="h-15 w-15 object-contain"
                />
              }
              <span class="text-base">{{ skill.name }}</span>
            </li>
          }
          <li class="flex flex-col items-center gap-2 text-center text-accent-400">
            <img
              ngSrc="assets/img/continually_learning_icons.png"
              width="60"
              height="60"
              alt=""
              class="h-15 w-15 object-contain"
            />
            <span class="text-base">{{ t().skills.learningBadge }}</span>
          </li>
        </ul>

        <div class="text-center md:col-start-2 md:row-start-2 md:text-left">
          <h3 class="font-heading text-2xl font-bold md:text-3xl">
            {{ t().skills.lookingTitle }}
            <span class="text-accent-400">{{ t().skills.lookingHighlight }}</span>
          </h3>
          <p class="mx-auto mt-3 max-w-md text-base md:mx-0 md:text-lg">
            {{ t().skills.lookingText }}
          </p>
          <a
            routerLink="/"
            fragment="contact"
            class="mt-8 inline-block rounded-lg bg-accent-400 px-6 py-3 text-base font-medium text-white transition hover:bg-accent-300 md:py-3.5 md:text-xl"
          >
            {{ t().skills.cta }}
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly skills = [...SKILLS, ...ADDITIONAL_SKILLS];
}
