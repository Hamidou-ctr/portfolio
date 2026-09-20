import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PROFILE } from '../../core/data/profile.data';
import { BrandLogo } from '../../shared/brand-logo/brand-logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BrandLogo, NgOptimizedImage],
  template: `
    <footer class="bg-navy-900 py-16 text-white md:py-24">
      <div
        class="mx-auto flex max-w-360 flex-col items-center gap-8 px-6 md:grid md:grid-cols-3 md:items-center md:px-8"
      >
        <div class="flex flex-col items-center gap-2 md:items-start">
          <span class="text-4xl md:text-5xl"><app-brand-logo [name]="firstName" /></span>
          <div class="hidden gap-6 md:flex">
            @for (link of legalLinks(); track link.path) {
              <a [routerLink]="link.path" class="text-base transition hover:text-accent-400">
                {{ link.label }}
              </a>
            }
          </div>
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
        </div>

        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 md:hidden">
          @for (link of legalLinks(); track link.path) {
            <a [routerLink]="link.path" class="text-base transition hover:text-accent-400">
              {{ link.label }}
            </a>
          }
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly legalLinks = computed(() => [
    { path: '/legal-notice', label: this.t().footer.legalNotice },
    { path: '/privacy-policy', label: this.t().footer.privacyPolicy },
  ]);
  protected readonly profile = PROFILE;
  protected readonly firstName = PROFILE.name.split(' ')[0];
  protected readonly year = new Date().getFullYear();
}
