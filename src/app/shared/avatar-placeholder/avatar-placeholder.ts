import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-placeholder',
  template: `
    <div
      class="flex h-full w-full items-center justify-center bg-linear-gradient-to-br from-navy-700 to-navy-900"
      role="img"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" class="h-1/2 w-1/2 text-white/25">
        <path
          d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-9 2.2-9 5v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1c0-2.8-4.6-5-9-5z"
        />
      </svg>
    </div>
  `,
  host: { class: 'block overflow-hidden' },
})
export class AvatarPlaceholder {}
