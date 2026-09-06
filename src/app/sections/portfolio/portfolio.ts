import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { PROJECTS } from '../../core/data/projects.data';
import { ProjectPreview } from '../../shared/project-preview/project-preview';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectPreview, NgOptimizedImage],
  template: `
    <section id="portfolio" class="relative scroll-mt-20 overflow-hidden bg-white py-20 md:py-28">
      <div
        class="pointer-events-none absolute -right-32 top-0 z-0 h-[600px] w-[600px] opacity-70"
        aria-hidden="true"
      >
        <img
          src="assets/img/purple_shadow_portfolio.png"
          alt=""
          loading="lazy"
          decoding="async"
          class="h-full w-full object-contain"
        />
      </div>

      <div class="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h2 class="font-heading text-3xl font-bold text-ink sm:text-4xl">
          {{ t().portfolio.title }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-muted">{{ t().portfolio.subtitle }}</p>
      </div>

      <ul class="relative mx-auto mt-16 flex max-w-6xl flex-col gap-20 px-6 lg:px-10">
        @for (project of projects; track project.name) {
          <li class="grid items-center gap-10 md:grid-cols-2">
            <div
              class="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 shadow-lg shadow-slate-200/60"
            >
              @if (project.previewSrc && project.previewSrc.endsWith('.svg')) {
                <img
                  [src]="project.previewSrc"
                  [alt]="project.name"
                  class="h-full w-full object-contain p-8"
                />
              } @else if (project.previewSrc) {
                <img
                  [ngSrc]="project.previewSrc"
                  fill
                  class="object-contain p-8"
                  [alt]="project.name"
                />
              } @else {
                <app-project-preview [name]="project.name" class="h-full w-full" />
              }
            </div>

            <div class="text-left">
              <h3 class="font-heading text-2xl font-bold text-violet-500">{{ project.name }}</h3>
              <p class="mt-2 text-sm font-medium text-accent-600">{{ project.tags.join(' | ') }}</p>
              <p class="mt-4 text-muted">{{ project.description }}</p>

              <div class="mt-6 flex flex-wrap gap-3">
                <a
                  [href]="project.liveUrl"
                  target="_blank"
                  rel="noopener"
                  class="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-600"
                >
                  {{ t().portfolio.liveTest }}
                </a>
                <a
                  [href]="project.githubUrl"
                  target="_blank"
                  rel="noopener"
                  class="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-400"
                >
                  {{ t().portfolio.github }}
                </a>
              </div>
            </div>
          </li>
        }
      </ul>
    </section>
  `,
})
export class Portfolio {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  protected readonly projects = PROJECTS;
}
