import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  template: `
    <span>{{ prefix() }}</span>
    <span class="relative text-accent-400">
      {{ suffix() }}
      <span
        class="absolute -top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet-400"
        aria-hidden="true"
      ></span>
    </span>
  `,
  host: { class: 'inline-flex items-baseline font-heading font-bold' },
})
export class BrandLogo {
  readonly name = input.required<string>();
  protected readonly prefix = computed(() => this.name().slice(0, -2));
  protected readonly suffix = computed(() => this.name().slice(-2));
}
