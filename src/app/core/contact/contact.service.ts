import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, throwError, timeout } from 'rxjs';
import { CONTACT_ENDPOINT_URL } from './contact.config';

export interface ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

const REQUEST_TIMEOUT_IN_MILLISECONDS = 15_000;

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly httpClient = inject(HttpClient);
  private readonly endpointUrl = inject(CONTACT_ENDPOINT_URL);

  /** Emits once when the form service accepted the message (any 2xx answer), errors otherwise. */
  send(contactMessage: ContactMessage): Observable<void> {
    if (!this.hasSecureEndpoint()) {
      return throwError(() => new Error('The contact endpoint is missing or does not use https.'));
    }

    // A urlencoded body is a "simple" cross-origin request: it needs no preflight, and every
    // form service accepts it because it is what a plain HTML form sends.
    const body = new HttpParams()
      .set('name', contactMessage.name.trim())
      .set('email', contactMessage.email.trim())
      .set('message', contactMessage.message.trim());

    return this.httpClient
      .post(this.endpointUrl, body, {
        headers: { Accept: 'application/json' },
        responseType: 'text',
      })
      .pipe(
        timeout(REQUEST_TIMEOUT_IN_MILLISECONDS),
        map(() => undefined),
      );
  }

  private hasSecureEndpoint(): boolean {
    try {
      return new URL(this.endpointUrl).protocol === 'https:';
    } catch {
      return false;
    }
  }
}
