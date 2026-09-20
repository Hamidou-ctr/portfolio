import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalDocument } from './legal-document';

function createComponent(introduction?: string): ComponentFixture<LegalDocument> {
  const fixture = TestBed.createComponent(LegalDocument);
  fixture.componentRef.setInput('title', 'Privacy Policy');
  fixture.componentRef.setInput('sections', [
    { heading: '1. Controller', body: 'Ada Lovelace\nLondon' },
    { heading: '2. Hosting', body: 'Hosted in Germany.' },
  ]);
  fixture.componentRef.setInput('lastUpdated', 'Last updated: September 2026');
  if (introduction !== undefined) {
    fixture.componentRef.setInput('introduction', introduction);
  }
  fixture.detectChanges();
  return fixture;
}

describe('LegalDocument', () => {
  it('shows the title, every section heading and the last update', () => {
    const element: HTMLElement = createComponent().nativeElement;

    expect(element.querySelector('h1')?.textContent?.trim()).toBe('Privacy Policy');
    const headings = [...element.querySelectorAll('h2')].map((heading) => heading.textContent);
    expect(headings).toEqual(['1. Controller', '2. Hosting']);
    expect(element.textContent).toContain('Last updated: September 2026');
  });

  it('keeps the line breaks of a section body', () => {
    const element: HTMLElement = createComponent().nativeElement;

    const firstBody = element.querySelector('section p');
    expect(firstBody?.textContent).toBe('Ada Lovelace\nLondon');
    expect(firstBody?.classList.contains('whitespace-pre-line')).toBe(true);
  });

  it('shows the introduction when one is given', () => {
    const element: HTMLElement = createComponent('Read this first.').nativeElement;

    expect(element.textContent).toContain('Read this first.');
  });

  it('leaves out the introduction paragraph when none is given', () => {
    const element: HTMLElement = createComponent().nativeElement;

    // Only the paragraph with the last update sits directly in the main element.
    expect(element.querySelectorAll('main > p')).toHaveLength(1);
  });
});
