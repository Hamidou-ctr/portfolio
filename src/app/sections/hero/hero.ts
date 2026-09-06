import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <section
      id="hero"
      class="relative flex min-h-[calc(100svh_-_6rem)] scroll-mt-24 flex-col overflow-hidden bg-navy-900 text-white"
    >
      <img
        src="assets/img/hero_background2.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[28%] w-full"
      />

      <div class="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-8">
        <div class="grid flex-1 gap-8 pt-10 md:grid-cols-2 md:pt-16">
          <div class="flex justify-center self-start md:pt-16">
            <div class="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[680px]">
              <img
                src="assets/img/photo_shadows.png"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute left-1/2 top-[-6%] w-[75%] -translate-x-1/2"
              />
              <div class="relative md:max-h-[calc(100svh-17rem)] md:overflow-hidden">
                <img
                  ngSrc="assets/img/profil1.png"
                  width="940"
                  height="1174"
                  priority
                  class="h-auto w-full"
                  [alt]="'Portrait of ' + profile.name"
                />
              </div>
            </div>
          </div>

          <div
            class="relative z-20 flex flex-col items-center justify-center pb-28 md:pb-0 md:pt-24"
          >
            <div class="flex items-center gap-4">
              <span class="rotate-180 text-xl [writing-mode:vertical-rl] md:text-2xl">
                {{ t().hero.iAm }}
              </span>
              <div>
                <h1
                  class="font-heading text-[32px] font-bold leading-none sm:text-5xl lg:text-[64px]"
                >
                  {{ profile.name }}
                </h1>
                <p
                  class="mt-1 text-2xl uppercase leading-tight text-violet-500 sm:text-3xl lg:text-[40px]"
                >
                  {{ t().hero.role }}
                </p>
              </div>
            </div>

            <a
              routerLink="/"
              fragment="contact"
              class="mt-8 rounded-lg bg-accent-400 px-6 py-3.5 text-lg font-medium text-white transition hover:bg-accent-300 md:text-xl"
            >
              {{ t().hero.cta }}
            </a>
          </div>
        </div>

        <a
          routerLink="/"
          fragment="about"
          class="absolute bottom-10 right-24 z-20 hidden text-lg [writing-mode:vertical-rl] transition hover:text-accent-400 lg:block"
        >
          {{ t().hero.scrollDown }} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div class="absolute inset-x-0 bottom-10 z-20 flex items-center gap-4 md:gap-6">
        <div
          class="h-0.5 w-[max(2rem,calc((100%_-_1440px)/2_+_2rem))] flex-none bg-violet-500"
          aria-hidden="true"
        ></div>
        <a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
          <img ngSrc="assets/img/github_button.png" width="30" height="30" alt="" class="h-8 w-8" />
        </a>
        <a
          [href]="'mailto:' + profile.email"
          aria-label="Email"
          class="flex items-center gap-3 md:gap-4"
        >
          <img ngSrc="assets/img/email_button.png" width="30" height="31" alt="" class="h-8 w-8" />
          <span class="text-base md:text-lg">{{ profile.email }}</span>
        </a>
      </div>
    </section>
  `,
})
export class Hero {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly profile = PROFILE;
}
