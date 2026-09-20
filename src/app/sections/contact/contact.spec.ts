import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CONTACT_ENDPOINT_URL } from '../../core/contact/contact.config';
import { TRANSLATIONS } from '../../core/i18n/translations';
import { Contact } from './contact';

const ENDPOINT_URL = 'https://forms.example.test/f/abc123';
const texts = TRANSLATIONS.en.contact;

class IntersectionObserverStub {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

function createComponent(endpointUrl = ENDPOINT_URL): {
  fixture: ComponentFixture<Contact>;
  controller: HttpTestingController;
} {
  TestBed.configureTestingModule({
    imports: [Contact],
    providers: [
      provideRouter([]),
      provideHttpClient(),
      provideHttpClientTesting(),
      { provide: CONTACT_ENDPOINT_URL, useValue: endpointUrl },
    ],
  });
  const fixture = TestBed.createComponent(Contact);
  fixture.detectChanges();
  return { fixture, controller: TestBed.inject(HttpTestingController) };
}

function findElement<ElementType extends HTMLElement>(
  fixture: ComponentFixture<Contact>,
  selector: string,
): ElementType {
  const element = fixture.nativeElement.querySelector(selector);
  if (!element) {
    throw new Error(`No element matches "${selector}".`);
  }
  return element as ElementType;
}

function setValue(fixture: ComponentFixture<Contact>, selector: string, value: string): void {
  const element = findElement<HTMLInputElement | HTMLTextAreaElement>(fixture, selector);
  element.value = value;
  element.dispatchEvent(new Event('input'));
}

function fillValidForm(fixture: ComponentFixture<Contact>, message = 'Hello Hamidou'): void {
  setValue(fixture, '#name', 'Ada Lovelace');
  setValue(fixture, '#email', 'ada@example.test');
  setValue(fixture, '#message', message);
  findElement<HTMLInputElement>(fixture, '#privacy').click();
  fixture.detectChanges();
}

function submitForm(fixture: ComponentFixture<Contact>): void {
  findElement<HTMLFormElement>(fixture, 'form').dispatchEvent(new Event('submit'));
  fixture.detectChanges();
}

describe('Contact', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', IntersectionObserverStub);
  });

  afterEach(() => {
    try {
      TestBed.inject(HttpTestingController).verify();
    } finally {
      // A failing verify() would otherwise skip Angular's own cleanup and break later tests too.
      vi.unstubAllGlobals();
      TestBed.resetTestingModule();
    }
  });

  it('sends the message and shows the success message after the service accepted it', () => {
    const { fixture, controller } = createComponent();
    fillValidForm(fixture);

    submitForm(fixture);
    controller.expectOne(ENDPOINT_URL).flush('');
    fixture.detectChanges();

    expect(findElement(fixture, '[role="status"]').textContent).toContain(texts.successTitle);
    expect(fixture.nativeElement.querySelector('form')).toBeNull();
  });

  it('disables the button and shows the sending label while the request is pending', () => {
    const { fixture, controller } = createComponent();
    fillValidForm(fixture);

    submitForm(fixture);

    const button = findElement<HTMLButtonElement>(fixture, 'button[type="submit"]');
    expect(button.disabled).toBe(true);
    expect(button.textContent).toContain(texts.sending);
    controller.expectOne(ENDPOINT_URL).flush('');
  });

  it('sends only one request when the form is submitted twice while waiting', () => {
    const { fixture, controller } = createComponent();
    fillValidForm(fixture);

    submitForm(fixture);
    submitForm(fixture);

    controller.expectOne(ENDPOINT_URL).flush('');
  });

  it('keeps the entered text and shows an error when the service rejects the message', () => {
    const { fixture, controller } = createComponent();
    fillValidForm(fixture);

    submitForm(fixture);
    controller
      .expectOne(ENDPOINT_URL)
      .flush('failure', { status: 500, statusText: 'Internal Server Error' });
    fixture.detectChanges();

    expect(findElement(fixture, '[role="alert"]').textContent).toContain(texts.sendError);
    expect(fixture.nativeElement.querySelector('[role="status"]')).toBeNull();
    expect(findElement<HTMLTextAreaElement>(fixture, '#message').value).toBe('Hello Hamidou');
    expect(findElement<HTMLButtonElement>(fixture, 'button[type="submit"]').disabled).toBe(false);
  });

  it('shows an error instead of a fake success while no endpoint is configured', () => {
    const { fixture, controller } = createComponent('');
    fillValidForm(fixture);

    submitForm(fixture);

    expect(findElement(fixture, '[role="alert"]').textContent).toContain(texts.sendError);
    expect(fixture.nativeElement.querySelector('[role="status"]')).toBeNull();
    controller.expectNone(() => true);
  });

  it('sends nothing when a bot filled the invisible field', () => {
    const { fixture, controller } = createComponent();
    fillValidForm(fixture);
    setValue(fixture, '#website', 'https://spam.example.test');

    submitForm(fixture);

    controller.expectNone(() => true);
  });

  it('sends nothing while required fields are missing', () => {
    const { fixture, controller } = createComponent();

    submitForm(fixture);

    controller.expectNone(() => true);
    expect(fixture.nativeElement.querySelector('[role="status"]')).toBeNull();
  });

  it('does not accept a message that consists of spaces only', () => {
    const { fixture, controller } = createComponent();
    fillValidForm(fixture, '     ');

    submitForm(fixture);

    controller.expectNone(() => true);
    expect(findElement<HTMLButtonElement>(fixture, 'button[type="submit"]').disabled).toBe(true);
  });

  it('limits the length of every field in the browser', () => {
    const { fixture } = createComponent();

    expect(findElement(fixture, '#name').getAttribute('maxlength')).toBe('100');
    expect(findElement(fixture, '#email').getAttribute('maxlength')).toBe('254');
    expect(findElement(fixture, '#message').getAttribute('maxlength')).toBe('5000');
  });

  it('keeps the honeypot away from assistive technology and the tab order', () => {
    const { fixture } = createComponent();

    const honeypot = findElement<HTMLInputElement>(fixture, '#website');
    expect(honeypot.tabIndex).toBe(-1);
    expect(honeypot.closest('[aria-hidden="true"]')).not.toBeNull();
  });
});
