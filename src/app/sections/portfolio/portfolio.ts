import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { PROJECTS } from '../../core/data/projects.data';
import { ProjectPreview } from '../../shared/project-preview/project-preview';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectPreview, NgOptimizedImage],
  template: `
    <section
      id="portfolio"
      class="relative scroll-mt-20 overflow-hidden py-20 text-white md:scroll-mt-24 md:py-28"
    >
      <img
        src="assets/img/purple_shadow_portfolio.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute top-1/3 -left-40 z-0 w-100 max-w-none md:-left-60 md:w-180"
      />

      <div class="relative mx-auto max-w-360 px-6 md:px-8">
        <div class="text-center">
          <div class="flex items-center justify-center gap-4 md:gap-6">
            <span aria-hidden="true" class="h-0.75 w-8 flex-none bg-violet-500 md:w-36"></span>
            <h2 class="font-heading text-3xl font-bold leading-none sm:text-5xl lg:text-[64px]">
              {{ t().portfolio.title }}
            </h2>
            <span aria-hidden="true" class="h-0.75 w-8 flex-none bg-violet-500 md:w-36"></span>
          </div>
          <p class="mx-auto mt-4 max-w-xl text-base md:text-lg">{{ t().portfolio.subtitle }}</p>
        </div>

        <ul class="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          @for (project of projects; track project.name; let odd = $odd) {
            <li
              class="flex flex-col items-center gap-8 md:flex-row md:gap-12"
              [class]="odd ? 'md:flex-row-reverse' : ''"
            >
              <div class="w-full max-w-100 flex-none md:w-1/2 md:max-w-none">
                @if (project.previewSrc && project.previewSrc.endsWith('.svg')) {
                  <img [src]="project.previewSrc" [alt]="project.name" class="h-auto w-full" />
                } @else if (project.previewSrc) {
                  <img
                    [ngSrc]="project.previewSrc"
                    width="339"
                    height="339"
                    [alt]="project.name"
                    class="h-auto w-full"
                  />
                } @else {
                  <app-project-preview [name]="project.name" class="aspect-square rounded-2xl" />
                }
              </div>

              <div class="text-center md:w-1/2" [class]="odd ? 'md:text-right' : 'md:text-left'">
                <h3 class="font-heading text-2xl font-bold text-violet-500 md:text-3xl">
                  {{ project.name }}
                </h3>
                <p class="mt-1 text-base text-accent-400 md:text-lg">
                  {{ project.tags.join(' | ') }}
                </p>
                <p class="mt-4 text-base">{{ project.description }}</p>

                <div
                  class="mt-6 flex flex-wrap justify-center gap-4"
                  [class]="odd ? 'md:justify-end' : 'md:justify-start'"
                >
                  <a
                    [href]="project.liveUrl"
                    target="_blank"
                    rel="noopener"
                    class="rounded-lg bg-violet-500 px-6 py-2.5 text-base font-medium text-white transition hover:bg-[#0ee707]"
                  >
                    {{ t().portfolio.liveTest }}
                  </a>
                  <a
                    [href]="project.githubUrl"
                    target="_blank"
                    rel="noopener"
                    class="rounded-lg border border-[#0ee707] px-6 py-2.5 text-base font-medium text-white transition hover:bg-[#0ee707]"
                  >
                    {{ t().portfolio.github }}
                  </a>
                </div>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Portfolio {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly projects = PROJECTS;
}
