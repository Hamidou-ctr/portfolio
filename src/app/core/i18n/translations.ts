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
    lookingTitle: string;
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
    highlight: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    privacyLabel: string;
    privacyRequired: string;
    submit: string;
    successTitle: string;
    successText: string;
  };
  footer: {
    legalNotice: string;
  };
  legal: {
    title: string;
    sections: { heading: string; body: string }[];
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
        'Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills?',
      bullets: [
        'Where are you located? Are you open to different ways of working, such as working remotely or even relocating?',
        'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?',
        'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? Keywords: analytical thinking, creativity, persistence and collaboration.',
      ],
    },
    skills: {
      title: 'My skills',
      subtitle: 'Show that you have used a variety of front-end technologies in your projects.',
      learningBadge: 'Continually learning',
      lookingTitle: 'Looking for another skill?',
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
      highlight: 'Need a Frontend developer? Contact me!',
      nameLabel: 'Your name',
      emailLabel: 'Your email',
      messageLabel: 'Your message',
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your email.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Please enter a message.',
      privacyLabel:
        "I've read the privacy policy and agree to the processing of my data as outlined.",
      privacyRequired: 'Please accept the privacy policy.',
      submit: 'Send message :)',
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
          heading: 'Information according to § 5 TMG',
          body: 'Replace this with your name, address and, if applicable, your business registration details.',
        },
        {
          heading: 'Contact',
          body: 'Phone: your phone number\nEmail: your email address',
        },
        {
          heading: 'Disclaimer',
          body: 'Placeholder legal text. Replace with your own liability, copyright and content notices before publishing this site.',
        },
      ],
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
        'Schreibe hier etwas über dich mit IT-Bezug. Warum begeisterst du dich fürs Programmieren? Was inspiriert dich, deine Programmierfähigkeiten zu verbessern?',
      bullets: [
        'Wo bist du ansässig? Bist du offen für verschiedene Arbeitsmodelle, z. B. Remote-Arbeit oder einen Umzug?',
        'Zeige, dass du aufgeschlossen bist. Bist du begeistert davon, neue Technologien zu lernen und dich stetig weiterzuentwickeln?',
        'Eine kurze Beschreibung deines Lösungsansatzes. Lernst du aus jeder Herausforderung auf der Suche nach der effizientesten oder elegantesten Lösung? Stichworte: analytisches Denken, Kreativität, Ausdauer und Teamarbeit.',
      ],
    },
    skills: {
      title: 'Meine Skills',
      subtitle:
        'Zeige, dass du in deinen Projekten verschiedene Frontend-Technologien eingesetzt hast.',
      learningBadge: 'Ständig am Lernen',
      lookingTitle: 'Auf der Suche nach einem weiteren Skill?',
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
      highlight: 'Brauchst du einen Frontend-Entwickler? Melde dich!',
      nameLabel: 'Dein Name',
      emailLabel: 'Deine E-Mail',
      messageLabel: 'Deine Nachricht',
      nameRequired: 'Bitte gib deinen Namen ein.',
      emailRequired: 'Bitte gib deine E-Mail-Adresse ein.',
      emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      messageRequired: 'Bitte gib eine Nachricht ein.',
      privacyLabel:
        'Ich habe die Datenschutzerklärung gelesen und stimme der beschriebenen Verarbeitung meiner Daten zu.',
      privacyRequired: 'Bitte akzeptiere die Datenschutzerklärung.',
      submit: 'Nachricht senden :)',
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
          heading: 'Angaben gemäß § 5 TMG',
          body: 'Ersetze diesen Platzhalter durch deinen Namen, deine Anschrift und ggf. deine Gewerbedaten.',
        },
        {
          heading: 'Kontakt',
          body: 'Telefon: deine Telefonnummer\nE-Mail: deine E-Mail-Adresse',
        },
        {
          heading: 'Haftungsausschluss',
          body: 'Platzhaltertext. Ersetze diesen Abschnitt vor der Veröffentlichung durch deine eigenen Haftungs-, Urheberrechts- und Inhaltshinweise.',
        },
      ],
    },
  },
};
