import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

type ContactField = 'name' | 'email' | 'message' | 'privacyAccepted';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgOptimizedImage, RouterLink],
  template: `
    <section
      id="contact"
      class="relative scroll-mt-20 overflow-hidden pt-16 pb-24 text-white md:scroll-mt-24 md:pt-20 md:pb-32"
    >
      <img
        src="assets/img/purple_shadow_contact.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-40 -left-40 z-0 w-100 max-w-none md:-bottom-60 md:-left-60 md:w-180"
      />

      <div class="relative mx-auto max-w-360 px-6 md:px-8">
        <div class="text-left md:text-center">
          <div class="relative inline-block">
            <h2 class="font-heading text-4xl font-bold leading-none sm:text-5xl lg:text-[64px]">
              {{ t().contact.eyebrow }}
            </h2>
            <span
              aria-hidden="true"
              class="absolute right-full top-1/2 mr-2 h-0.75 w-screen -translate-y-1/2 bg-violet-500 md:mr-8"
            ></span>
          </div>
        </div>

        <div class="mt-10 grid gap-10 md:mt-16 md:grid-cols-[1fr_1.2fr] md:gap-16 lg:gap-24">
          <div>
            <h3 class="font-heading text-2xl font-bold md:text-3xl">{{ t().contact.heading }}</h3>
            <p class="mt-5 text-base md:text-lg">{{ t().contact.text }}</p>
            <p class="mt-5 text-base md:text-lg">
              {{ t().contact.needPrefix }}
              <span class="font-bold">{{ t().contact.needHighlight }}</span>
            </p>
          </div>

          <div>
            @if (submitted()) {
              <div class="rounded-lg border border-accent-400 p-8" role="status">
                <div class="flex items-center gap-3">
                  <img
                    ngSrc="assets/img/done_contact_my.png"
                    width="25"
                    height="26"
                    alt=""
                    class="h-6 w-6"
                  />
                  <h3 class="font-heading text-xl font-bold">{{ t().contact.successTitle }}</h3>
                </div>
                <p class="mt-2 text-base">{{ t().contact.successText }}</p>
              </div>
            } @else {
              <form [formGroup]="form" (ngSubmit)="submit()" novalidate class="space-y-6">
                <div>
                  <label for="name" class="sr-only">{{ t().contact.nameLabel }}</label>
                  <div class="relative">
                    <input
                      id="name"
                      type="text"
                      formControlName="name"
                      [placeholder]="t().contact.nameLabel"
                      class="w-full rounded-lg border bg-transparent py-3 pr-12 pl-6 text-base text-white outline-none transition placeholder:text-white/70 focus:border-violet-400"
                      [class]="borderClass('name')"
                      [attr.aria-invalid]="isInvalid('name')"
                      [attr.aria-describedby]="isInvalid('name') ? 'name-error' : null"
                    />
                    @if (isValid('name')) {
                      <img
                        ngSrc="assets/img/done_contact_my.png"
                        width="25"
                        height="26"
                        alt=""
                        class="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2"
                      />
                    } @else if (isInvalid('name')) {
                      <img
                        ngSrc="assets/img/error_contact_my.png"
                        width="26"
                        height="26"
                        alt=""
                        class="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2"
                      />
                    }
                  </div>
                  @if (isInvalid('name')) {
                    <p id="name-error" class="mt-2 text-base text-red-500">
                      {{ t().contact.nameRequired }}
                    </p>
                  }
                </div>

                <div>
                  <label for="email" class="sr-only">{{ t().contact.emailLabel }}</label>
                  <div class="relative">
                    <input
                      id="email"
                      type="email"
                      formControlName="email"
                      [placeholder]="t().contact.emailLabel"
                      class="w-full rounded-lg border bg-transparent py-3 pr-12 pl-6 text-base text-white outline-none transition placeholder:text-white/70 focus:border-violet-400"
                      [class]="borderClass('email')"
                      [attr.aria-invalid]="isInvalid('email')"
                      [attr.aria-describedby]="isInvalid('email') ? 'email-error' : null"
                    />
                    @if (isValid('email')) {
                      <img
                        ngSrc="assets/img/done_contact_my.png"
                        width="25"
                        height="26"
                        alt=""
                        class="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2"
                      />
                    } @else if (isInvalid('email')) {
                      <img
                        ngSrc="assets/img/error_contact_my.png"
                        width="26"
                        height="26"
                        alt=""
                        class="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2"
                      />
                    }
                  </div>
                  @if (isInvalid('email')) {
                    <p id="email-error" class="mt-2 text-base text-red-500">
                      {{
                        form.controls.email.errors?.['required']
                          ? t().contact.emailRequired
                          : t().contact.emailInvalid
                      }}
                    </p>
                  }
                </div>

                <div>
                  <label for="message" class="sr-only">{{ t().contact.messageLabel }}</label>
                  <div class="relative">
                    <textarea
                      id="message"
                      formControlName="message"
                      [placeholder]="t().contact.messageLabel"
                      class="h-44 w-full resize-y rounded-lg border bg-transparent py-3 pr-12 pl-6 text-base text-white outline-none transition placeholder:text-white/70 focus:border-violet-400 md:h-50"
                      [class]="borderClass('message')"
                      [attr.aria-invalid]="isInvalid('message')"
                      [attr.aria-describedby]="isInvalid('message') ? 'message-error' : null"
                    ></textarea>
                    @if (isValid('message')) {
                      <img
                        ngSrc="assets/img/done_contact_my.png"
                        width="25"
                        height="26"
                        alt=""
                        class="absolute top-4 right-4 h-6 w-6"
                      />
                    } @else if (isInvalid('message')) {
                      <img
                        ngSrc="assets/img/error_contact_my.png"
                        width="26"
                        height="26"
                        alt=""
                        class="absolute top-4 right-4 h-6 w-6"
                      />
                    }
                  </div>
                  @if (isInvalid('message')) {
                    <p id="message-error" class="mt-2 text-base text-red-500">
                      {{ t().contact.messageRequired }}
                    </p>
                  }
                </div>

                <div>
                  <div class="flex items-start gap-3">
                    <input
                      id="privacy"
                      type="checkbox"
                      formControlName="privacyAccepted"
                      class="mt-0.5 h-5 w-5 flex-none appearance-none bg-[url('/assets/img/default.png')] bg-contain bg-center bg-no-repeat checked:bg-[url('/assets/img/checked.png')]"
                      [attr.aria-invalid]="isInvalid('privacyAccepted')"
                      [attr.aria-describedby]="
                        isInvalid('privacyAccepted') ? 'privacy-error' : null
                      "
                    />
                    <label for="privacy" class="text-base">
                      {{ t().contact.privacyBefore
                      }}<a
                        routerLink="/legal-notice"
                        class="text-violet-400 underline-offset-2 hover:underline"
                        >{{ t().contact.privacyLink }}</a
                      >{{ t().contact.privacyAfter }}
                    </label>
                  </div>
                  @if (isInvalid('privacyAccepted')) {
                    <p id="privacy-error" class="mt-2 text-base text-red-500">
                      {{ t().contact.privacyRequired }}
                    </p>
                  }
                </div>

                <div class="pt-2 text-center">
                  <button
                    type="submit"
                    [disabled]="form.invalid"
                    class="rounded-lg bg-accent-400 px-10 py-4 text-lg font-medium text-white transition hover:bg-accent-300 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-white/80 md:text-xl"
                  >
                    {{ t().contact.submit }}
                  </button>
                </div>
              </form>
            }
          </div>
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

  protected isInvalid(controlName: ContactField): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  protected isValid(controlName: ContactField): boolean {
    const control = this.form.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  protected borderClass(controlName: ContactField): string {
    if (this.isInvalid(controlName)) {
      return 'border-red-500';
    }
    if (this.isValid(controlName)) {
      return 'border-accent-400';
    }
    return 'border-violet-500/60';
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
  }
}
