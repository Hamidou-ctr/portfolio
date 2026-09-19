import { Project } from '../models/project.model';

/** Replace with your own projects, tags, description and links. */
export const PROJECTS: readonly Project[] = [
  {
    name: 'Join',
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    description:
      'Together with other training participants, I co-developed a web-based task management tool inspired by the Kanban system. Using HTML, CSS, JavaScript, and Firebase, we built a collaborative app with drag-and-drop functionality and task assignment by user and category. Git was used for version control and teamwork coordination.',
    liveUrl: 'https://join.hamidoudiallo.de/login.html',
    githubUrl: 'https://github.com/Hamidou-ctr/join',
    previewSrc: 'assets/img/join.svg',
  },
  {
    name: 'Pollo Loco',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description:
      'A simple jump-and-run game based on an object-oriented approach. Collect coins and tabasco bottles, dodge chickens and defeat the endboss to save the day.',
    liveUrl: '#',
    githubUrl: '#',
    previewSrc: 'assets/img/Pollo_loco.svg',
  },
  {
    name: 'Simple CRM',
    tags: ['Angular', 'Firebase'],
    description:
      'A very simple Customer Relationship Management system working with full CRUD functionality.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Pokédex',
    tags: ['JavaScript', 'HTML', 'CSS', 'API'],
    description:
      'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
    liveUrl: '#',
    githubUrl: '#',
    previewSrc: 'assets/img/pokedex.png',
  },
  {
    name: 'DA Bubble',
    tags: ['Angular', 'TypeScript', 'Firebase'],
    description:
      'A Slack clone app that revolutionizes team communication with an intuitive interface, real-time messaging and robust channel organization.',
    liveUrl: '#',
    githubUrl: '#',
    previewSrc: 'assets/img/da-babble.svg',
  },
];
