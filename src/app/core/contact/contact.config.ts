import { InjectionToken } from '@angular/core';

/**
 * Address of the Formspree form that turns a contact message into an email for the site owner.
 *
 * The address is public by design because it ends up in the browser bundle, so it must never
 * contain a secret such as an API key. Only https addresses are accepted, and while the value
 * is empty the contact form reports an error instead of pretending to send.
 */
export const CONTACT_ENDPOINT_URL = new InjectionToken<string>('CONTACT_ENDPOINT_URL', {
  providedIn: 'root',
  factory: () => 'https://formspree.io/f/xqeywbok',
});
