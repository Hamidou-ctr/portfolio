import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';
import { BrandLogo } from '../../shared/brand-logo/brand-logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, BrandLogo, NgOptimizedImage],
  template: `
    <header class="sticky top-0 z-50 bg-navy-900">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a routerLink="/" class="text-xl text-white" (click)="closeMenu()">
          <app-brand-logo [name]="firstName()" />
        </a>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Main">
          <a routerLink="/" fragment="about" class="text-sm font-medium text-white/80 transition hover:text-white">
            {{ t().nav.about }}
          </a>
          <a routerLink="/" fragment="skills" class="text-sm font-medium text-white/80 transition hover:text-white">
            {{ t().nav.skills }}
          </a>
          <a
            routerLink="/"
            fragment="portfolio"
            class="text-sm font-medium text-white/80 transition hover:text-white"
          >
            {{ t().nav.portfolio }}
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <div
            class="hidden items-center gap-1 rounded-full bg-navy-800 p-1 text-xs font-semibold sm:flex"
            role="group"
            [attr.aria-label]="t().nav.langName"
          >
            <button
              type="button"
              class="rounded-full px-3 py-1 transition"
              [class.bg-accent-400]="lang() === 'de'"
              [class.text-navy-950]="lang() === 'de'"
              [class.text-white]="lang() !== 'de'"
              [attr.aria-pressed]="lang() === 'de'"
              (click)="languageService.setLang('de')"
            >
              DE
            </button>
            <button
              type="button"
              class="rounded-full px-3 py-1 transition"
              [class.bg-accent-400]="lang() === 'en'"
              [class.text-navy-950]="lang() === 'en'"
              [class.text-white]="lang() !== 'en'"
              [attr.aria-pressed]="lang() === 'en'"
              (click)="languageService.setLang('en')"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
            aria-controls="mobile-nav"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle navigation menu"
            (click)="menuOpen.set(!menuOpen())"
          >
            @if (!menuOpen()) {
              <img ngSrc="assets/img/burger_menu.png" width="32" height="31" alt="" class="h-6 w-6" />
            } @else {
              <img ngSrc="assets/img/close_medium.png" width="35" height="32" alt="" class="h-6 w-6" />
            }
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <nav
          id="mobile-nav"
          class="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-center gap-8 bg-slate-600 px-12 md:hidden"
          aria-label="Mobile"
        >
          <a class="text-2xl text-white" routerLink="/" fragment="about" (click)="closeMenu()">
            {{ t().nav.about }}
          </a>
          <a class="text-2xl text-white" routerLink="/" fragment="skills" (click)="closeMenu()">
            {{ t().nav.skills }}
          </a>
          <a class="text-2xl text-white" routerLink="/" fragment="portfolio" (click)="closeMenu()">
            {{ t().nav.portfolio }}
          </a>
          <a class="text-2xl text-white" routerLink="/" fragment="contact" (click)="closeMenu()">
            {{ t().nav.contact }}
          </a>

          <div class="flex items-center gap-2 pt-2 text-xl" role="group" [attr.aria-label]="t().nav.langName">
            <button
              type="button"
              [class.text-accent-400]="lang() === 'en'"
              [class.font-bold]="lang() === 'en'"
              [class.text-white/60]="lang() !== 'en'"
              [attr.aria-pressed]="lang() === 'en'"
              (click)="languageService.setLang('en')"
            >
              EN
            </button>
            <span class="text-white/40">/</span>
            <button
              type="button"
              [class.text-accent-400]="lang() === 'de'"
              [class.font-bold]="lang() === 'de'"
              [class.text-white/60]="lang() !== 'de'"
              [attr.aria-pressed]="lang() === 'de'"
              (click)="languageService.setLang('de')"
            >
              DE
            </button>
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
