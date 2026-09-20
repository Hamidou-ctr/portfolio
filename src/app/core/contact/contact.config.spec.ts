import { TestBed } from '@angular/core/testing';
import { CONTACT_ENDPOINT_URL } from './contact.config';

describe('CONTACT_ENDPOINT_URL', () => {
  it('ships with a configured https address so the deployed form can really send', () => {
    const endpointUrl = TestBed.inject(CONTACT_ENDPOINT_URL);

    expect(new URL(endpointUrl).protocol).toBe('https:');
  });
});
