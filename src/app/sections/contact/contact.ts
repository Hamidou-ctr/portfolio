import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../core/contact/contact.service';
import { LanguageService } from '../../core/i18n/language.service';
import { ScrollReveal } from '../../shared/scroll-reveal/scroll-reveal';

type ContactField = 'name' | 'email' | 'message' | 'privacyAccepted';
type ContactStatus = 'idle' | 'sending' | 'failed';

const SUCCESS_POPUP_DURATION_IN_MILLISECONDS = 5_000;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgOptimizedImage, RouterLink, ScrollReveal],
  template: `
    <section
      id="contact"
      class="relative scroll-mt-20 border-b-[3px] border-accent-400 overflow-hidden pt-16 pb-24 text-white md:scroll-mt-24 md:pt-20 md:pb-32"
    >
      <img
        src="assets/img/purple_shadow_contact.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-40 -left-40 z-0 w-100 max-w-none md:-bottom-60 md:-left-60 md:w-180"
      />

      <div class="relative mx-auto max-w-360 px-6 md:px-8">
        <div
          class="text-left md:text-center"
          [once]="false"
          [appScrollReveal]="'zoom-in'"
          [delay]="300"
        >
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
          <div [once]="false" [appScrollReveal]="'fade-right'" [delay]="300">
            <h3 class="font-heading text-2xl font-bold md:text-3xl">{{ t().contact.heading }}</h3>
            <p class="mt-5 text-base md:text-lg">{{ t().contact.text }}</p>
            <p class="mt-5 text-base md:text-lg">
              {{ t().contact.needPrefix }}
              <span class="font-bold">{{ t().contact.needHighlight }}</span>
            </p>
          </div>

          <div>
            <form
              [formGroup]="form"
              (ngSubmit)="submit()"
              novalidate
              class="space-y-6"
              [once]="false"
              [appScrollReveal]="'fade-left'"
              [delay]="300"
            >
              <!-- Honeypot: invisible for people, bots fill it and are dropped in submit(). -->
              <div class="sr-only" aria-hidden="true">
                <label for="website">Leave this field empty</label>
                <input
                  id="website"
                  type="text"
                  formControlName="website"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>

              <div>
                <label for="name" class="sr-only">{{ t().contact.nameLabel }}</label>
                <div class="relative">
                  <input
                    id="name"
                    type="text"
                    formControlName="name"
                    [attr.maxlength]="maximumLength.name"
                    [placeholder]="t().contact.nameLabel"
                    class="focus-ring-none w-full rounded-lg border-2 bg-transparent py-3 pr-12 pl-6 text-base text-white outline-none transition placeholder:text-white/70 focus:border-violet-400 hover:border-color:[#70E61C]"
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
                    [attr.maxlength]="maximumLength.email"
                    [placeholder]="t().contact.emailLabel"
                    class="focus-ring-none w-full rounded-lg border-2 bg-transparent py-3 pr-12 pl-6 text-base text-white outline-none transition placeholder:text-white/70 focus:border-violet-400 hover:border-color:[#70E61C]"
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
                    [attr.maxlength]="maximumLength.message"
                    [placeholder]="t().contact.messageLabel"
                    class="focus-ring-none h-44 w-full resize-y rounded-lg border-2 bg-transparent py-3 pr-12 pl-6 text-base text-white outline-none transition placeholder:text-white/70 focus:border-violet-400 hover:border-color:[#70E61C] md:h-50"
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
                    class="mt-0.5 h-6 w-6 flex-none appearance-none bg-[url('/assets/img/default.png')] bg-contain bg-center bg-no-repeat checked:bg-[url('/assets/img/checked.png')]"
                    [attr.aria-invalid]="isInvalid('privacyAccepted')"
                    [attr.aria-describedby]="isInvalid('privacyAccepted') ? 'privacy-error' : null"
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
                @if (status() === 'failed') {
                  <p role="alert" class="mb-4 text-base text-red-500">
                    {{ t().contact.sendError }}
                  </p>
                }
                <button
                  type="submit"
                  [disabled]="form.invalid || isSending()"
                  class="rounded-lg bg-accent-400 px-10 py-4 text-lg font-medium text-white transition hover:bg-accent-300 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-white/80 md:text-xl"
                >
                  {{ submitLabel() }}
                </button>
              </div>
            </form>

            <div class="mt-10 flex justify-end md:mt-14">
              <button
                type="button"
                aria-label="Back to top"
                class="rounded-full transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent-400"
                (click)="scrollToTop()"
              >
                <img
                  ngSrc="assets/img/go-up-button.png"
                  width="39"
                  height="39"
                  alt=""
                  class="h-10 w-10"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The live region stays in the DOM so screen readers announce the popup when it appears. -->
    <div
      role="status"
      aria-atomic="true"
      class="pointer-events-none fixed inset-0 z-60 flex items-center justify-center overflow-hidden px-6"
    >
      @if (isSuccessVisible()) {
        <div
          animate.enter="animate-success-popup-enter"
          animate.leave="animate-success-popup-leave"
          class="w-full max-w-md rounded-lg border-2 border-accent-400 bg-navy-800 p-8 text-white shadow-2xl"
        >
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
      }
    </div>
  `,
})
export class Contact {
  private readonly languageService = inject(LanguageService);
  protected readonly t = this.languageService.t;
  private readonly document = inject(DOCUMENT);

  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly status = signal<ContactStatus>('idle');
  protected readonly isSending = computed(() => this.status() === 'sending');
  protected readonly isSuccessVisible = signal(false);
  private successTimeoutHandle: ReturnType<typeof setTimeout> | undefined;
  protected readonly submitLabel = computed(() =>
    this.isSending() ? this.t().contact.sending : this.t().contact.submit,
  );

  protected readonly maximumLength = { name: 100, email: 254, message: 5000 } as const;

  protected readonly form = this.fb.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(/\S/),
        Validators.maxLength(this.maximumLength.name),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(this.maximumLength.email)],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.pattern(/\S/),
        Validators.maxLength(this.maximumLength.message),
      ],
    ],
    privacyAccepted: [false, Validators.requiredTrue],
    // Honeypot: stays empty for people, see submit().
    website: '',
  });

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.successTimeoutHandle));
  }

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
    if (this.isSending()) {
      return;
    }

    const { name, email, message, website } = this.form.getRawValue();
    if (website !== '') {
      // Only a bot fills the invisible field. Act as if it worked and send nothing.
      this.finishSuccessfully();
      return;
    }

    this.status.set('sending');
    this.contactService
      .send({ name, email, message })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.finishSuccessfully(),
        error: () => this.status.set('failed'),
      });
  }

  /** Empties the form (it stays on screen) and shows the success popup for a few seconds. */
  private finishSuccessfully(): void {
    this.status.set('idle');
    this.form.reset();

    clearTimeout(this.successTimeoutHandle);
    this.isSuccessVisible.set(true);
    this.successTimeoutHandle = setTimeout(
      () => this.isSuccessVisible.set(false),
      SUCCESS_POPUP_DURATION_IN_MILLISECONDS,
    );
  }

  protected scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
