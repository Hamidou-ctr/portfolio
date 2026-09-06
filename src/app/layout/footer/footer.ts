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
    <footer class="relative overflow-hidden bg-navy-950 py-10 text-white/60">
      <div class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 opacity-50" aria-hidden="true">
        <img ngSrc="assets/img/purple_shadow_footer.png" fill class="object-contain" alt="" />
      </div>

      <div class="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 lg:px-10">
        <span class="text-lg text-white"><app-brand-logo [name]="firstName" /></span>

        <div
          class="flex w-full flex-col items-center gap-4 border-t border-white/10 pt-6 md:flex-row md:justify-between"
        >
          <a routerLink="/legal-notice" class="text-sm transition hover:text-white">{{
            t().footer.legalNotice
          }}</a>
          <p class="text-sm">&copy; {{ year }} {{ profile.name }}</p>
          <div class="flex items-center gap-4">
            <a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
              <img ngSrc="assets/img/github_button.png" width="30" height="30" alt="" class="h-5 w-5" />
            </a>
            <a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
              <img ngSrc="assets/img/linkedin_button.png" width="30" height="31" alt="" class="h-5 w-5" />
            </a>
            <a [href]="'mailto:' + profile.email" aria-label="Email">
              <img ngSrc="assets/img/email_button.png" width="30" height="31" alt="" class="h-5 w-5" />
            </a>
          </div>
        </div>
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
