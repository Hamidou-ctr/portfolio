import { TRANSLATIONS } from './translations';

describe('legal texts', () => {
  it('has the same number of sections in English and German in the legal notice', () => {
    expect(TRANSLATIONS.de.legal.sections).toHaveLength(TRANSLATIONS.en.legal.sections.length);
  });

  it('has the same number of sections in English and German in the privacy policy', () => {
    expect(TRANSLATIONS.de.privacy.sections).toHaveLength(TRANSLATIONS.en.privacy.sections.length);
  });
});
