import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';
import { BrandLogo } from '../../shared/brand-logo/brand-logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BrandLogo, NgOptimizedImage],
  template: `
    <footer class="border-t-[3px] border-accent-400 bg-navy-900 py-16 text-white md:py-24">
      <div
        class="mx-auto flex max-w-360 flex-col items-center gap-8 px-6 md:grid md:grid-cols-3 md:items-center md:px-8"
      >
        <div class="flex flex-col items-center gap-2 md:items-start">
          <span class="text-4xl md:text-5xl"><app-brand-logo [name]="firstName" /></span>
          <a
            routerLink="/legal-notice"
            class="hidden text-base transition hover:text-accent-400 md:block"
          >
            {{ t().footer.legalNotice }}
          </a>
        </div>

        <p class="text-center text-xl md:text-2xl">&copy; {{ profile.name }} {{ year }}</p>

        <div class="flex items-center justify-center gap-11 md:justify-end">
          <a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
            <img
              ngSrc="assets/img/github_button.png"
              width="30"
              height="30"
              alt=""
              class="h-8 w-8"
            />
          </a>
          <a [href]="'mailto:' + profile.email" aria-label="Email">
            <img
              ngSrc="assets/img/email_button.png"
              width="30"
              height="31"
              alt=""
              class="h-8 w-8"
            />
          </a>
          <a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
            <img
              ngSrc="assets/img/linkedin_button.png"
              width="30"
              height="31"
              alt=""
              class="h-8 w-8"
            />
          </a>
        </div>

        <a routerLink="/legal-notice" class="text-base transition hover:text-accent-400 md:hidden">
          {{ t().footer.legalNotice }}
        </a>
      </div>
    </footer>
  `,
})
export class Footer {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly profile = PROFILE;
  protected readonly firstName = PROFILE.name.split(' ')[0];
  protected readonly year = new Date().getFullYear();
}
