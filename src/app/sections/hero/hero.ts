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
      class="relative isolate flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden bg-navy-900 bg-cover bg-bottom text-white"
      style="background-image: url('assets/img/hero_background1.png')"
    >
      <div
        class="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center lg:px-10"
      >
        <div class="order-1 flex justify-center md:order-0 md:justify-start">
          <div class="relative h-64 w-52 sm:h-80 sm:w-64 md:h-96 md:w-80">
            <img
              ngSrc="assets/img/profil1.png"
              fill
              priority
              class="object-contain object-bottom"
              [alt]="'Portrait of ' + profile.name"
            />
          </div>
        </div>

        <div class="order-2 text-center md:order-0 md:text-left">
          <p class="mb-2 text-sm font-medium uppercase tracking-widest text-white/60">
            {{ t().hero.iAm }}
          </p>
          <h1 class="font-heading text-4xl font-bold sm:text-5xl">{{ profile.name }}</h1>
          <p class="mt-1 font-heading text-xl font-semibold text-violet-400 sm:text-2xl">
            {{ t().hero.role }}
          </p>

          <a
            routerLink="/"
            fragment="contact"
            class="mt-6 inline-block rounded-full bg-accent-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-accent-300"
          >
            {{ t().hero.cta }}
          </a>

          <div
            class="mt-10 flex items-center justify-center gap-4 border-t border-white/10 pt-6 md:justify-start"
          >
            <a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
              <img
                ngSrc="assets/img/github_button.png"
                width="30"
                height="30"
                alt=""
                class="h-6 w-6"
              />
            </a>
            <a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
              <img
                ngSrc="assets/img/linkedin_button.png"
                width="30"
                height="31"
                alt=""
                class="h-6 w-6"
              />
            </a>
            <a
              [href]="'mailto:' + profile.email"
              aria-label="Email"
              class="flex items-center gap-2"
            >
              <img
                ngSrc="assets/img/email_button.png"
                width="30"
                height="31"
                alt=""
                class="h-6 w-6"
              />
              <span class="text-sm text-white/70">{{ profile.email }}</span>
            </a>
          </div>
        </div>
      </div>

      <a
        routerLink="/"
        fragment="about"
        class="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-1 text-xs font-medium uppercase tracking-widest text-white/50 transition hover:text-white lg:flex"
      >
        {{ t().hero.scrollDown }}
        <img
          ngSrc="assets/img/scroll_down.png"
          width="16"
          height="16"
          alt=""
          class="h-3 w-3 -rotate-90"
        />
      </a>
    </section>
  `,
})
export class Hero {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly profile = PROFILE;
}
