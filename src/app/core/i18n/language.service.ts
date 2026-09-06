import { Injectable, computed, signal } from '@angular/core';
import { Lang, TRANSLATIONS } from './translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly lang = signal<Lang>('en');

  readonly currentLang = this.lang.asReadonly();
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
