import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <header class="sticky top-0 z-50 bg-navy-900 text-white">
      <div class="mx-auto flex h-20 max-w-360 items-center justify-between px-6 md:h-24 md:px-8">
        <a
          routerLink="/"
          class="font-heading text-2xl font-bold md:text-[28px]"
          (click)="closeMenu()"
        >
          {{ firstName() }}
        </a>

        <div class="hidden items-center gap-16 md:flex">
          <nav class="flex items-center gap-4 text-xl font-semibold" aria-label="Main">
            <a routerLink="/" fragment="about" class="transition hover:text-accent-400">
              {{ t().nav.about }}
            </a>
            <a routerLink="/" fragment="skills" class="transition hover:text-accent-400">
              {{ t().nav.skills }}
            </a>
            <a routerLink="/" fragment="portfolio" class="transition hover:text-accent-400">
              {{ t().nav.portfolio }}
            </a>
          </nav>

          <div class="flex items-center gap-2" role="group" [attr.aria-label]="t().nav.langName">
            <button
              type="button"
              class="flex h-8 min-w-8 items-center justify-center rounded border px-1.5 text-sm font-semibold transition"
              [class.bg-accent-400]="lang() === 'de'"
              [class.border-accent-400]="lang() === 'de'"
              [class.border-white/50]="lang() !== 'de'"
              [attr.aria-pressed]="lang() === 'de'"
              (click)="languageService.setLang('de')"
            >
              DE
            </button>
            <button
              type="button"
              class="flex h-8 min-w-8 items-center justify-center rounded border px-1.5 text-sm font-semibold transition"
              [class.bg-accent-400]="lang() === 'en'"
              [class.border-accent-400]="lang() === 'en'"
              [class.border-white/50]="lang() !== 'en'"
              [attr.aria-pressed]="lang() === 'en'"
              (click)="languageService.setLang('en')"
            >
              EN
            </button>
          </div>
        </div>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-controls="mobile-nav"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Toggle navigation menu"
          (click)="menuOpen.set(!menuOpen())"
        >
          @if (!menuOpen()) {
            <img ngSrc="assets/img/burger_menu.png" width="32" height="31" alt="" class="h-6 w-6" />
          } @else {
            <img
              ngSrc="assets/img/close_medium.png"
              width="35"
              height="32"
              alt=""
              class="h-6 w-6"
            />
          }
        </button>
      </div>

      @if (menuOpen()) {
        <nav
          id="mobile-nav"
          class="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col items-center justify-center bg-slate-600 md:hidden"
          aria-label="Mobile"
        >
          <div class="flex w-44 flex-col gap-10 text-xl">
            <a routerLink="/" fragment="about" (click)="closeMenu()">{{ t().nav.about }}</a>
            <a routerLink="/" fragment="skills" (click)="closeMenu()">{{ t().nav.skills }}</a>
            <a routerLink="/" fragment="portfolio" (click)="closeMenu()">{{ t().nav.portfolio }}</a>
            <a routerLink="/" fragment="contact" (click)="closeMenu()">{{ t().nav.contact }}</a>

            <div class="flex items-center gap-2" role="group" [attr.aria-label]="t().nav.langName">
              <button
                type="button"
                [class.text-accent-400]="lang() === 'en'"
                [class.text-white/70]="lang() !== 'en'"
                [attr.aria-pressed]="lang() === 'en'"
                (click)="languageService.setLang('en')"
              >
                EN
              </button>
              <span class="text-white/70">/</span>
              <button
                type="button"
                [class.text-accent-400]="lang() === 'de'"
                [class.text-white/70]="lang() !== 'de'"
                [attr.aria-pressed]="lang() === 'de'"
                (click)="languageService.setLang('de')"
              >
                DE
              </button>
            </div>
          </div>
        </nav>
      }
    </header>
  `,
})
export class Header {
  protected readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly lang = this.languageService.currentLang;
  protected readonly menuOpen = signal(false);
  protected readonly firstName = signal(PROFILE.name.split(' ')[0]);

  private readonly document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this.document.body.classList.toggle('overflow-hidden', this.menuOpen());
    });
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
