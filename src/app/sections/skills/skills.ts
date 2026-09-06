import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { SKILLS, ADDITIONAL_SKILLS } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <section id="skills" class="relative scroll-mt-20 overflow-hidden bg-slate-50 py-20 md:py-28">
      <div class="pointer-events-none absolute -left-40 top-10 z-0 h-[600px] w-[600px] opacity-60" aria-hidden="true">
        <img ngSrc="assets/img/green_shadow_skills_portfolio.png" fill class="object-contain" alt="" />
      </div>

      <div class="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 class="font-heading text-3xl font-bold text-ink sm:text-4xl">{{ t().skills.title }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-muted">{{ t().skills.subtitle }}</p>

        <ul class="mt-10 flex flex-wrap items-center justify-center gap-4">
          @for (skill of skills; track skill.name) {
            <li class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              @if (skill.icon === 'supabase') {
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-violet-500" aria-hidden="true">
                  <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              } @else {
                <img
                  [ngSrc]="'assets/img/' + skill.icon + '_icons.png'"
                  width="30"
                  height="30"
                  class="h-5 w-5 object-contain"
                  [alt]="skill.name"
                />
              }
              <span class="text-sm font-medium text-ink">{{ skill.name }}</span>
            </li>
          }
          <li class="flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-white shadow-sm">
            <img
              ngSrc="assets/img/continually_learning_icons.png"
              width="60"
              height="60"
              class="h-5 w-5 object-contain"
              alt=""
            />
            <span class="text-sm font-medium">{{ t().skills.learningBadge }}</span>
          </li>
        </ul>

        <div class="mx-auto mt-16 max-w-2xl rounded-3xl border border-slate-200 bg-white p-8">
          <h3
            class="font-heading text-xl font-semibold text-ink underline decoration-accent-400 decoration-wavy underline-offset-4"
          >
            {{ t().skills.lookingTitle }}
          </h3>
          <p class="mt-3 text-sm text-muted">{{ t().skills.lookingText }}</p>

          <ul class="mt-6 flex flex-wrap justify-center gap-3">
            @for (skill of additionalSkills; track skill.name) {
              <li class="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2">
                <img
                  [ngSrc]="'assets/img/' + skill.icon + '_icons.png'"
                  width="61"
                  height="60"
                  class="h-5 w-5 object-contain"
                  [alt]="skill.name"
                />
                <span class="text-sm font-medium text-ink">{{ skill.name }}</span>
              </li>
            }
          </ul>

          <a
            routerLink="/"
            fragment="contact"
            class="mt-8 inline-block rounded-full bg-accent-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-accent-300"
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
  protected readonly skills = SKILLS;
  protected readonly additionalSkills = ADDITIONAL_SKILLS;
}
