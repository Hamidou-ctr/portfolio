export type Lang = 'de' | 'en';

export interface Translation {
  nav: {
    about: string;
    skills: string;
    portfolio: string;
    contact: string;
    langName: string;
  };
  hero: {
    iAm: string;
    role: string;
    cta: string;
    scrollDown: string;
  };
  about: {
    eyebrow: string;
    intro: string;
    bullets: string[];
  };
  skills: {
    title: string;
    subtitle: string;
    learningBadge: string;
    learningTooltip: string;
    lookingTitle: string;
    lookingHighlight: string;
    lookingText: string;
    cta: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    liveTest: string;
    github: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    text: string;
    needPrefix: string;
    needHighlight: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    privacyBefore: string;
    privacyLink: string;
    privacyAfter: string;
    privacyRequired: string;
    submit: string;
    sending: string;
    sendError: string;
    successTitle: string;
    successText: string;
  };
  footer: {
    legalNotice: string;
  };
  legal: {
    title: string;
    sections: { heading: string; body: string }[];
    lastUpdated: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    nav: {
      about: 'About me',
      skills: 'My skills',
      portfolio: 'Portfolio',
      contact: 'Contact',
      langName: 'Language',
    },
    hero: {
      iAm: 'I am',
      role: 'Frontend Developer',
      cta: "Let's talk!",
      scrollDown: 'Scroll down',
    },
    about: {
      eyebrow: 'About me',
      intro:
        "Hi, I'm a german speaking Frontend Developer living in Wuppertal. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.",
      bullets: [
        'Flexible in terms of working environments, I can work effectively both on-site in Wuppertal and remotely.',
        'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
        "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.",
      ],
    },
    skills: {
      title: 'My skills',
      subtitle: 'Show that you have used a variety of front-end technologies in your projects.',
      learningBadge: 'Continually learning',
      learningTooltip: 'I have a special interest in learning',
      lookingTitle: 'Looking for',
      lookingHighlight: 'another skill',
      lookingText: 'Reveal enthusiasm for learning new technologies and frameworks.',
      cta: 'Get in touch',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle:
        'Explore a selection of my work here - interact with projects to see my skills in action.',
      liveTest: 'Live test',
      github: 'Github',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Got a problem to solve?',
      text: 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.',
      needPrefix: 'Need a Frontend developer?',
      needHighlight: 'Contact me!',
      nameLabel: 'Your name',
      emailLabel: 'Your email',
      messageLabel: 'Your message',
      nameRequired: 'Your name is required.',
      emailRequired: 'Your email is required.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Your message is required.',
      privacyBefore: "I've read the ",
      privacyLink: 'privacy policy',
      privacyAfter: ' and agree to the processing of my data as outlined.',
      privacyRequired: 'Please accept the privacy policy.',
      submit: 'Send message :)',
      sending: 'Sending ...',
      sendError:
        'Your message could not be sent. Please try again in a moment or write to me directly by email.',
      successTitle: 'Message sent!',
      successText: "Thanks for reaching out - I'll get back to you as soon as possible.",
    },
    footer: {
      legalNotice: 'Legal Notice',
    },
    legal: {
      title: 'Legal Notice',
      sections: [
        {
          heading: 'Information according to § 5 DDG',
          body: 'Hamidou Diallo \nOberstraße 18 \n42107 Wuppertal \nGermany',
        },
        {
          heading: 'Contact',
          body: 'Email: hamiduguinea@gmail.com\nContact form: available in the Contact section of the home page',
        },
        {
          heading: 'Dispute Resolution',
          body: 'I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
        },
        {
          heading: 'Liability for Contents',
          body: 'The contents of this website were created with the utmost care. However, I cannot guarantee the accuracy, completeness, or up-to-dateness of the contents.',
        },
        {
          heading: 'Liability for Links',
          body: 'This website contains links to external third-party websites (e.g., GitHub), on whose content I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for their content.',
        },
        {
          heading: 'Copyright',
          body: 'The content and works created by me on this website are subject to German copyright law. Contributions by third parties are marked as such. The duplication, editing, distribution, and any kind of use outside the limits of copyright law require my written consent.',
        },
      ],
      lastUpdated: 'Last updated: September 2026',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Meine Skills',
      portfolio: 'Portfolio',
      contact: 'Kontakt',
      langName: 'Sprache',
    },
    hero: {
      iAm: 'Ich bin',
      role: 'Frontend-Entwickler',
      cta: 'Lass uns reden!',
      scrollDown: 'Nach unten scrollen',
    },
    about: {
      eyebrow: 'Über mich',
      intro:
        'Hi, ich bin ein deutschsprachiger Frontend-Entwickler aus Wuppertal. Motiviert durch die grenzenlosen Möglichkeiten der IT begeistert es mich, visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.',
      bullets: [
        'Flexibel im Arbeitsumfeld: Ich kann sowohl vor Ort in Wuppertal als auch remote effektiv arbeiten.',
        'Ich bin aufgeschlossen und suche stets nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten kontinuierlich zu erweitern.',
        'In meinem Beruf ist Programmieren nicht nur das Schreiben von Code, sondern eine kreative Form der Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu übersetzen. So helfe ich dir, deine Ziele zu erreichen und deine Visionen zum Leben zu erwecken.',
      ],
    },
    skills: {
      title: 'Meine Skills',
      subtitle:
        'Zeige, dass du in deinen Projekten verschiedene Frontend-Technologien eingesetzt hast.',
      learningBadge: 'Ständig am Lernen',
      learningTooltip: 'Besonders interessiert mich das Lernen von',
      lookingTitle: 'Auf der Suche nach',
      lookingHighlight: 'einem weiteren Skill',
      lookingText: 'Zeige Begeisterung dafür, neue Technologien und Frameworks zu lernen.',
      cta: 'Kontakt aufnehmen',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle:
        'Entdecke eine Auswahl meiner Arbeiten - interagiere mit den Projekten, um meine Skills in Aktion zu sehen.',
      liveTest: 'Live-Test',
      github: 'Github',
    },
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Hast du ein Problem zu lösen?',
      text: 'Ermutige Besucher:innen, dich zu kontaktieren, und beschreibe, für welche Rolle du dich interessierst. Zeige, welchen Mehrwert du für ihre Projekte schaffen kannst.',
      needPrefix: 'Brauchst du einen Frontend-Entwickler?',
      needHighlight: 'Melde dich!',
      nameLabel: 'Dein Name',
      emailLabel: 'Deine E-Mail',
      messageLabel: 'Deine Nachricht',
      nameRequired: 'Bitte gib deinen Namen ein.',
      emailRequired: 'Bitte gib deine E-Mail-Adresse ein.',
      emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      messageRequired: 'Bitte gib eine Nachricht ein.',
      privacyBefore: 'Ich habe die ',
      privacyLink: 'Datenschutzerklärung',
      privacyAfter: ' gelesen und stimme der beschriebenen Verarbeitung meiner Daten zu.',
      privacyRequired: 'Bitte akzeptiere die Datenschutzerklärung.',
      submit: 'Nachricht senden :)',
      sending: 'Wird gesendet ...',
      sendError:
        'Deine Nachricht konnte nicht gesendet werden. Bitte versuche es gleich noch einmal oder schreib mir direkt per E-Mail.',
      successTitle: 'Nachricht gesendet!',
      successText: 'Danke für deine Nachricht - ich melde mich so schnell wie möglich zurück.',
    },
    footer: {
      legalNotice: 'Impressum',
    },
    legal: {
      title: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß § 5 DDG',
          body: 'Hamidou Diallo\nOberstraße 18\n42107 Wuppertal\nDeutschland',
        },
        {
          heading: 'Kontakt',
          body: 'E-Mail: hamiduguinea@gmail.com\nKontaktformular: im Bereich Kontakt auf der Startseite',
        },
        {
          heading: 'Verbraucherstreitbeilegung',
          body: 'Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        },
        {
          heading: 'Haftung für Inhalte',
          body: 'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.',
        },
        {
          heading: 'Haftung für Links',
          body: 'Diese Website enthält Links zu externen Websites Dritter (z. B. GitHub), auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        },
        {
          heading: 'Urheberrecht',
          body: 'Die von mir erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.',
        },
      ],
      lastUpdated: 'Stand: September 2026',
    },
  },
};
