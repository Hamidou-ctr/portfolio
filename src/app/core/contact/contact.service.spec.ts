import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CONTACT_ENDPOINT_URL } from './contact.config';
import { ContactService } from './contact.service';

const VALID_ENDPOINT_URL = 'https://forms.example.test/f/abc123';

const contactMessage = {
  name: '  Ada Lovelace ',
  email: 'ada@example.test',
  message: '  Hi & bye = 100% +1\nsecond line ',
};

function createService(endpointUrl: string): {
  service: ContactService;
  controller: HttpTestingController;
} {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      { provide: CONTACT_ENDPOINT_URL, useValue: endpointUrl },
    ],
  });
  return {
    service: TestBed.inject(ContactService),
    controller: TestBed.inject(HttpTestingController),
  };
}

describe('ContactService', () => {
  afterEach(() => {
    try {
      TestBed.inject(HttpTestingController).verify();
    } finally {
      // A failing verify() would otherwise skip Angular's own cleanup and break later tests too.
      TestBed.resetTestingModule();
    }
  });

  it('posts the trimmed fields as a urlencoded body with a JSON accept header', () => {
    const { service, controller } = createService(VALID_ENDPOINT_URL);

    service.send(contactMessage).subscribe();

    const request = controller.expectOne(VALID_ENDPOINT_URL);
    expect(request.request.method).toBe('POST');
    expect(request.request.headers.get('Accept')).toBe('application/json');
    expect(request.request.withCredentials).toBe(false);

    const sentFields = new URLSearchParams(request.request.body.toString());
    expect(sentFields.get('name')).toBe('Ada Lovelace');
    expect(sentFields.get('email')).toBe('ada@example.test');
    expect(sentFields.get('message')).toBe('Hi & bye = 100% +1\nsecond line');
    expect([...sentFields.keys()]).toEqual(['name', 'email', 'message']);
    request.flush('');
  });

  it('succeeds on any 2xx answer, even when the body is not JSON', () => {
    const { service, controller } = createService(VALID_ENDPOINT_URL);
    const onNext = vi.fn();
    const onError = vi.fn();

    service.send(contactMessage).subscribe({ next: onNext, error: onError });
    controller.expectOne(VALID_ENDPOINT_URL).flush('<html>Thanks</html>');

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
  });

  it('fails when the form service rejects the message', () => {
    const { service, controller } = createService(VALID_ENDPOINT_URL);
    const onNext = vi.fn();
    const onError = vi.fn();

    service.send(contactMessage).subscribe({ next: onNext, error: onError });
    controller
      .expectOne(VALID_ENDPOINT_URL)
      .flush('rejected', { status: 422, statusText: 'Unprocessable Entity' });

    expect(onNext).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it('fails without any request while no endpoint is configured', () => {
    const { service, controller } = createService('');
    const onError = vi.fn();

    service.send(contactMessage).subscribe({ error: onError });

    expect(onError).toHaveBeenCalledTimes(1);
    controller.expectNone(() => true);
  });

  it.each(['http://forms.example.test/f/abc123', 'not a url', 'javascript:alert(1)'])(
    'refuses the endpoint "%s" because it is not an https address',
    (endpointUrl) => {
      const { service, controller } = createService(endpointUrl);
      const onError = vi.fn();

      service.send(contactMessage).subscribe({ error: onError });

      expect(onError).toHaveBeenCalledTimes(1);
      controller.expectNone(() => true);
    },
  );

  it('fails when the form service does not answer in time', () => {
    vi.useFakeTimers();
    try {
      const { service, controller } = createService(VALID_ENDPOINT_URL);
      const onError = vi.fn();

      service.send(contactMessage).subscribe({ error: onError });
      const request = controller.expectOne(VALID_ENDPOINT_URL);

      vi.advanceTimersByTime(14_999);
      expect(onError).not.toHaveBeenCalled();
      vi.advanceTimersByTime(1);
      expect(onError).toHaveBeenCalledTimes(1);
      expect(request.cancelled).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });
});
