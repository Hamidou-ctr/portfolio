import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-project-preview',
  template: `
    <div
      class="flex h-full w-full items-center justify-center bg-linear-to-br from-violet-500 via-violet-600 to-navy-900"
      role="img"
      aria-hidden="true"
    >
      <span class="font-heading text-5xl font-bold text-white/40">{{ initial() }}</span>
    </div>
  `,
  host: { class: 'block overflow-hidden' },
})
export class ProjectPreview {
  readonly name = input.required<string>();
  protected readonly initial = computed(() => this.name().charAt(0));
}
