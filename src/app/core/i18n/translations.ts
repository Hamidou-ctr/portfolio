export type Lang = 'de' | 'en';

export interface LegalSection {
  heading: string;
  body: string;
}

interface LegalDocumentText {
  title: string;
  sections: LegalSection[];
  lastUpdated: string;
}

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
    privacyPolicy: string;
  };
  legal: LegalDocumentText;
  privacy: LegalDocumentText & { introduction: string };
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
      privacyPolicy: 'Privacy Policy',
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
    privacy: {
      title: 'Privacy Policy',
      introduction:
        'This privacy policy informs you about the nature, scope, and purpose of the processing of personal data within my online offering.',
      sections: [
        {
          heading: '1. Controller',
          body: 'Hamidou Diallo\nOberstraße 18\n42107 Wuppertal\nGermany\nEmail: hamiduguinea@gmail.com',
        },
        {
          heading: '2. Hosting and Server Log Files',
          body: 'This website is hosted by Hetzner Online GmbH. The servers are located in Germany. Hetzner processes personal data only according to my instructions and within the framework of a data processing agreement in accordance with Art. 28 GDPR.\n\nWhen you visit this website, the web server automatically records technical access data in log files: your IP address, the date and time of the request, the requested page, the amount of data transferred, the referring page, and information about your browser and operating system. This is technically necessary to deliver the website and to ensure its stability and security. The data is not merged with other data sources. The legal basis is Art. 6(1)(f) GDPR (my legitimate interest in the secure and error-free operation of this website). The log files are deleted as soon as they are no longer needed for this purpose.',
        },
        {
          heading: '3. Cookies and Tracking',
          body: 'This website does not use cookies or similar technologies such as local storage, and no analytics or tracking tools are used. The fonts are hosted locally on the same server, so no data is sent to font providers. There is no automated decision-making, including profiling.',
        },
        {
          heading: '4. Contact Form',
          body: 'If you contact me via the contact form, the following data will be processed:\n– Name\n– Email address\n– Your message\n\nProviding this data is voluntary. Without it, however, I cannot process your request through the form; you can also write to me by email instead.\n\nThe form is operated by Formspree, Inc. (USA). When you send it, your browser connects directly to the servers of Formspree. Formspree receives your entries as well as technical data such as your IP address, browser type, and referring website, stores the message, and forwards it to me by email. Apart from Formspree, I do not share this data with third parties.\n\nTransfer to the USA: Formspree hosts its services with Amazon Web Services in the United States, so your data is transferred to a country outside the EU/EEA. According to its own information, Formspree relies on Standard Contractual Clauses (Art. 46(2)(c) GDPR). The USA does not always offer a level of data protection equivalent to that of the EU, and US authorities may be able to access the data without effective legal remedies being available to you. By ticking the checkbox in the form, you explicitly consent to this transfer (Art. 49(1)(a) GDPR).\n\nPurpose and legal basis: The data is used exclusively to process your request. The legal basis is your consent given by ticking the checkbox in the form (Art. 6(1)(a) GDPR). If your request relates to a contract or pre-contractual measures (for example, a job or project inquiry), Art. 6(1)(b) GDPR applies in addition. You can withdraw your consent at any time with effect for the future.\n\nStorage duration: Your data is stored only as long as necessary to process your request and is then deleted, unless statutory retention obligations apply.',
        },
        {
          heading: '5. Contact by Email',
          body: 'If you contact me by email, I process your email address and the content of your message exclusively to answer your request. The legal basis is Art. 6(1)(b) GDPR if your request relates to a contract or pre-contractual measures, otherwise Art. 6(1)(f) GDPR (my legitimate interest in answering inquiries). The data is deleted as soon as your request has been dealt with, unless statutory retention obligations apply.',
        },
        {
          heading: '6. External Links',
          body: 'This website contains links to my GitHub profile and to the source code of my projects (GitHub Inc., USA). As long as you do not click a link, no data is transferred to GitHub through my website. When you click a GitHub link, you are redirected to the GitHub platform, where the privacy statement of GitHub applies.\n\nThe "Live test" buttons lead to separate web applications on subdomains of hamidoudiallo.de. This privacy policy applies only to this portfolio website.',
        },
        {
          heading: '7. Your Rights',
          body: 'You have the right:\n– to access the stored personal data (Art. 15 GDPR),\n– to rectification of inaccurate data (Art. 16 GDPR),\n– to erasure (Art. 17 GDPR),\n– to restriction of processing (Art. 18 GDPR),\n– to data portability (Art. 20 GDPR),\n– to object to the processing (Art. 21 GDPR),\n– to withdraw your consent at any time with effect for the future (Art. 7(3) GDPR).\n\nTo exercise your rights, please contact me at hamiduguinea@gmail.com.',
        },
        {
          heading: '8. Right to Lodge a Complaint',
          body: 'You have the right to lodge a complaint with the competent supervisory authority if you believe that the processing of your personal data violates the GDPR.',
        },
        {
          heading: '9. Changes to This Privacy Policy',
          body: 'I reserve the right to amend this privacy policy in the event of changes to the website or legal requirements. Please check regularly for the current status.',
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
      privacyPolicy: 'Datenschutzerklärung',
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
    privacy: {
      title: 'Datenschutzerklärung',
      introduction:
        'Diese Datenschutzerklärung informiert dich über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten innerhalb meines Onlineangebots.',
      sections: [
        {
          heading: '1. Verantwortlicher',
          body: 'Hamidou Diallo\nOberstraße 18\n42107 Wuppertal\nDeutschland\nE-Mail: hamiduguinea@gmail.com',
        },
        {
          heading: '2. Hosting und Server-Logfiles',
          body: 'Diese Website wird bei der Hetzner Online GmbH gehostet. Die Server stehen in Deutschland. Hetzner verarbeitet personenbezogene Daten nur nach meiner Weisung und auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO.\n\nBeim Aufruf dieser Website speichert der Webserver automatisch technische Zugriffsdaten in Logfiles: deine IP-Adresse, Datum und Uhrzeit der Anfrage, die aufgerufene Seite, die übertragene Datenmenge, die zuvor besuchte Seite (Referrer) sowie Angaben zu deinem Browser und Betriebssystem. Das ist technisch erforderlich, um die Website auszuliefern und ihre Stabilität und Sicherheit zu gewährleisten. Eine Zusammenführung mit anderen Datenquellen findet nicht statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (mein berechtigtes Interesse am sicheren und fehlerfreien Betrieb der Website). Die Logfiles werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind.',
        },
        {
          heading: '3. Cookies und Tracking',
          body: 'Diese Website setzt keine Cookies und nutzt keine vergleichbaren Technologien wie den lokalen Speicher deines Browsers. Es werden keine Analyse- oder Tracking-Tools eingesetzt. Die Schriftarten werden lokal vom eigenen Server geladen, dadurch werden keine Daten an Schriftanbieter übermittelt. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.',
        },
        {
          heading: '4. Kontaktformular',
          body: 'Wenn du mir über das Kontaktformular schreibst, werden diese Daten verarbeitet:\n– Name\n– E-Mail-Adresse\n– deine Nachricht\n\nDie Angabe der Daten ist freiwillig. Ohne sie kann ich deine Anfrage über das Formular jedoch nicht bearbeiten; du kannst mir stattdessen auch direkt per E-Mail schreiben.\n\nDas Formular wird von Formspree, Inc. (USA) betrieben. Beim Absenden verbindet sich dein Browser direkt mit den Servern von Formspree. Formspree erhält dabei deine Eingaben sowie technische Daten wie deine IP-Adresse, den Browsertyp und die verweisende Website, speichert die Nachricht und leitet sie per E-Mail an mich weiter. Außer an Formspree gebe ich diese Daten nicht an Dritte weiter.\n\nÜbermittlung in die USA: Formspree betreibt seine Dienste bei Amazon Web Services in den USA. Deine Daten gelangen dadurch in ein Land außerhalb der EU bzw. des EWR. Nach eigenen Angaben stützt sich Formspree auf Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Die USA bieten nicht in jedem Fall ein dem EU-Recht gleichwertiges Datenschutzniveau, und US-Behörden können möglicherweise auf die Daten zugreifen, ohne dass dir wirksame Rechtsbehelfe zur Verfügung stehen. Mit dem Häkchen im Formular willigst du ausdrücklich in diese Übermittlung ein (Art. 49 Abs. 1 lit. a DSGVO).\n\nZweck und Rechtsgrundlage: Die Daten dienen ausschließlich der Bearbeitung deiner Anfrage. Rechtsgrundlage ist deine Einwilligung durch das Häkchen im Formular (Art. 6 Abs. 1 lit. a DSGVO). Bezieht sich deine Anfrage auf einen Vertrag oder auf vorvertragliche Maßnahmen (zum Beispiel eine Job- oder Projektanfrage), gilt zusätzlich Art. 6 Abs. 1 lit. b DSGVO. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.\n\nSpeicherdauer: Deine Daten werden nur so lange gespeichert, wie es zur Bearbeitung deiner Anfrage erforderlich ist, und danach gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        },
        {
          heading: '5. Kontakt per E-Mail',
          body: 'Wenn du mir per E-Mail schreibst, verarbeite ich deine E-Mail-Adresse und den Inhalt deiner Nachricht ausschließlich, um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn sich deine Anfrage auf einen Vertrag oder auf vorvertragliche Maßnahmen bezieht, andernfalls Art. 6 Abs. 1 lit. f DSGVO (mein berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald deine Anfrage erledigt ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        },
        {
          heading: '6. Externe Links',
          body: 'Diese Website enthält Links zu meinem GitHub-Profil und zum Quellcode meiner Projekte (GitHub Inc., USA). Solange du keinen Link anklickst, werden über meine Website keine Daten an GitHub übermittelt. Wenn du einen GitHub-Link anklickst, wirst du auf die Plattform von GitHub weitergeleitet; dort gilt die Datenschutzerklärung von GitHub.\n\nDie Schaltflächen „Live-Test“ führen zu eigenständigen Webanwendungen auf Subdomains von hamidoudiallo.de. Diese Datenschutzerklärung gilt nur für diese Portfolio-Website.',
        },
        {
          heading: '7. Deine Rechte',
          body: 'Du hast das Recht:\n– auf Auskunft über die gespeicherten personenbezogenen Daten (Art. 15 DSGVO),\n– auf Berichtigung unrichtiger Daten (Art. 16 DSGVO),\n– auf Löschung (Art. 17 DSGVO),\n– auf Einschränkung der Verarbeitung (Art. 18 DSGVO),\n– auf Datenübertragbarkeit (Art. 20 DSGVO),\n– auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO),\n– auf Widerruf deiner Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).\n\nUm deine Rechte auszuüben, schreib mir bitte an hamiduguinea@gmail.com.',
        },
        {
          heading: '8. Beschwerderecht',
          body: 'Du hast das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen die DSGVO verstößt.',
        },
        {
          heading: '9. Änderungen dieser Datenschutzerklärung',
          body: 'Ich behalte mir vor, diese Datenschutzerklärung bei Änderungen der Website oder der Rechtslage anzupassen. Bitte prüfe sie regelmäßig auf den aktuellen Stand.',
        },
      ],
      lastUpdated: 'Stand: September 2026',
    },
  },
};
