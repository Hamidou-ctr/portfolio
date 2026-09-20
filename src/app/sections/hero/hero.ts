import { NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <section
      id="hero"
      class="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 flex-col md:min-h-[calc(100svh-6rem)] md:scroll-mt-24 overflow-hidden bg-navy-900 text-white"
    >
      @if (viewportWidth() >= 1440) {
        <img
          ngSrc="assets/img/hero_background1.png"
          width="1440"
          height="879"
          priority
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[35vh] w-full"
        />
      } @else if (viewportWidth() >= 1200) {
        <!-- max-h keeps the wave from covering more than about a quarter of the photo in short windows -->
        <img
          ngSrc="assets/img/hero_background1.png"
          width="1440"
          height="879"
          priority
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full h-[60vh] max-h-[calc(41svh-2rem)] min-[1200px]:h-[47vh] min-[1300px]:h-[40vh]"
        />
      } @else if (viewportWidth() >= 768) {
        <img
          ngSrc="assets/img/hero_background2.png"
          width="1440"
          height="879"
          priority
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full h-[63vh] min-[800px]:h-[60vh] min-[1000px]:h-[50vh]"
        />
      }

      <div class="relative mx-auto flex w-full max-w-360 flex-1 flex-col px-8">
        <div
          class="grid flex-1 grid-cols-1 grid-rows-[auto_1fr] content-start gap-4 pt-4 md:grid-cols-2 md:grid-rows-none md:gap-8 md:pt-16"
        >
          <div
            class="relative mx-[calc(50%-50vw)] flex w-screen justify-center self-start [--photo-width:100vw] sm:[--photo-width:26.25rem] md:mx-0 md:w-auto md:pt-16"
          >
            <!-- md+: the photo shrinks with the window height (max-h below crops it to ~74%), so its proportions to the wave stay the same -->
            <div
              class="relative w-full sm:max-w-105 md:max-w-[min(42.5rem,calc((100svh-17rem)*1.08))]"
            >
              <img
                src="assets/img/photo_shadows.png"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute left-1/2 top-[-6%] w-[75%] -translate-x-1/2"
              />
              <div
                class="relative aspect-[20/23] overflow-hidden md:aspect-auto md:max-h-[calc(100svh-17rem)]"
              >
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

            @if (viewportWidth() < 768) {
              <!-- sized by photo width like the Figma frame: the wave edge crosses the photo at ~88% of its height and is stretched ~1.5x vertically -->
              <div
                class="pointer-events-none absolute inset-x-0 top-[calc(var(--photo-width)*0.925)] z-10 h-[calc(var(--photo-width)*0.92)] md:hidden"
              >
                <img
                  ngSrc="assets/img/hero_background2.png"
                  fill
                  priority
                  alt=""
                  aria-hidden="true"
                  class="object-fill"
                />
              </div>
            }
          </div>

          <div class="relative z-20 flex flex-col items-center justify-center md:pb-0 md:pt-24">
            <div class="flex items-center gap-4">
              <span class="rotate-180 text-xl [writing-mode:vertical-rl] md:text-2xl">
                {{ t().hero.iAm }}
              </span>
              <div>
                <h1
                  class="font-heading whitespace-nowrap text-[30px] font-bold leading-none sm:text-5xl lg:text-[64px]"
                >
                  {{ profile.name }}
                </h1>
                <p
                  class="mt-1 text-xl uppercase leading-tight text-violet-500 sm:text-3xl lg:text-[40px]"
                >
                  {{ t().hero.role }}
                </p>
              </div>
            </div>

            <a
              routerLink="/"
              fragment="contact"
              class="mt-8 rounded-lg bg-accent-400 px-6 py-3 text-base font-medium text-white transition hover:bg-accent-300 md:py-3.5 md:text-xl"
            >
              {{ t().hero.cta }}
            </a>
          </div>
        </div>

        <a
          routerLink="/"
          fragment="contact"
          class="absolute bottom-10 right-24 z-20 hidden text-lg [writing-mode:vertical-rl] transition hover:text-accent-400 lg:block"
        >
          {{ t().hero.scrollDown }} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div
        class="relative z-20 flex items-center gap-5 pb-10 pt-8 md:absolute md:inset-x-0 md:bottom-10 md:gap-6 md:p-0"
      >
        <div
          class="h-1 w-[max(5rem,calc((100%-1440px)/2+2rem))] flex-none bg-violet-500"
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
          <span class="hidden text-lg md:inline">{{ profile.email }}</span>
        </a>
      </div>
    </section>
  `,
})
export class Hero {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly profile = PROFILE;

  protected readonly viewportWidth = signal(0);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.viewportWidth.set(window.innerWidth);

      const updateViewportWidth = (): void => {
        this.viewportWidth.set(window.innerWidth);
      };

      window.addEventListener('resize', updateViewportWidth);
      this.destroyRef.onDestroy(() => window.removeEventListener('resize', updateViewportWidth));
    });
  }
}
