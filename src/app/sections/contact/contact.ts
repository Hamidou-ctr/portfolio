import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  template: `
    <section id="contact" class="scroll-mt-20 bg-navy-900 py-20 text-white md:py-28">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start lg:px-10">
        <div>
          <p class="text-sm font-medium uppercase tracking-widest text-white/60">
            {{ t().contact.eyebrow }}
          </p>
          <h2 class="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            {{ t().contact.heading }}
          </h2>
          <p class="mt-4 text-white/70">{{ t().contact.text }}</p>
          <p class="mt-4 font-semibold text-accent-400">{{ t().contact.highlight }}</p>
        </div>

        <div>
          @if (submitted()) {
            <div class="rounded-2xl border border-accent-400/40 bg-white/5 p-8" role="status">
              <div class="flex items-center gap-2">
                <img ngSrc="assets/img/done_contact_my.png" width="25" height="26" alt="" class="h-5 w-5" />
                <h3 class="font-heading text-xl font-bold text-accent-400">
                  {{ t().contact.successTitle }}
                </h3>
              </div>
              <p class="mt-2 text-white/70">{{ t().contact.successText }}</p>
            </div>
          } @else {
            <form [formGroup]="form" (ngSubmit)="submit()" novalidate class="space-y-6">
              <div>
                <label for="name" class="mb-1 block text-sm text-white/70">{{
                  t().contact.nameLabel
                }}</label>
                <input
                  id="name"
                  type="text"
                  formControlName="name"
                  class="w-full border-b border-white/30 bg-transparent py-2 text-white outline-none transition focus:border-accent-400"
                  [attr.aria-invalid]="isInvalid('name')"
                  [attr.aria-describedby]="isInvalid('name') ? 'name-error' : null"
                />
                @if (isInvalid('name')) {
                  <p id="name-error" class="mt-1 text-sm text-rose-300">
                    {{ t().contact.nameRequired }}
                  </p>
                }
              </div>

              <div>
                <label for="email" class="mb-1 block text-sm text-white/70">{{
                  t().contact.emailLabel
                }}</label>
                <input
                  id="email"
                  type="email"
                  formControlName="email"
                  class="w-full border-b border-white/30 bg-transparent py-2 text-white outline-none transition focus:border-accent-400"
                  [attr.aria-invalid]="isInvalid('email')"
                  [attr.aria-describedby]="isInvalid('email') ? 'email-error' : null"
                />
                @if (isInvalid('email')) {
                  <p id="email-error" class="mt-1 text-sm text-rose-300">
                    {{
                      form.controls.email.errors?.['required']
                        ? t().contact.emailRequired
                        : t().contact.emailInvalid
                    }}
                  </p>
                }
              </div>

              <div>
                <label for="message" class="mb-1 block text-sm text-white/70">{{
                  t().contact.messageLabel
                }}</label>
                <textarea
                  id="message"
                  rows="4"
                  formControlName="message"
                  class="w-full resize-none border-b border-white/30 bg-transparent py-2 text-white outline-none transition focus:border-accent-400"
                  [attr.aria-invalid]="isInvalid('message')"
                  [attr.aria-describedby]="isInvalid('message') ? 'message-error' : null"
                ></textarea>
                @if (isInvalid('message')) {
                  <p id="message-error" class="mt-1 text-sm text-rose-300">
                    {{ t().contact.messageRequired }}
                  </p>
                }
              </div>

              <div>
                <label class="flex items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    formControlName="privacyAccepted"
                    class="mt-0.5 h-5 w-5 flex-none appearance-none bg-[url('/assets/img/default.png')] bg-contain bg-center bg-no-repeat checked:bg-[url('/assets/img/checked.png')]"
                    [attr.aria-invalid]="isInvalid('privacyAccepted')"
                    [attr.aria-describedby]="isInvalid('privacyAccepted') ? 'privacy-error' : null"
                  />
                  <span>{{ t().contact.privacyLabel }}</span>
                </label>
                @if (isInvalid('privacyAccepted')) {
                  <p id="privacy-error" class="mt-1 text-sm text-rose-300">
                    {{ t().contact.privacyRequired }}
                  </p>
                }
              </div>

              <button
                type="submit"
                class="w-full rounded-full bg-accent-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-accent-300 disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/50 sm:w-auto"
              >
                {{ t().contact.submit }}
              </button>
            </form>
          }
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;

  private readonly fb = inject(FormBuilder);
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacyAccepted: [false, Validators.requiredTrue],
  });

  protected isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
  }
}
