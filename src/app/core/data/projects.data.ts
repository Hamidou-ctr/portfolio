import { Project } from '../models/project.model';

/** Replace with your own projects, tags, description and links. */
export const PROJECTS: readonly Project[] = [
  {
    name: 'Join',
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    description:
      'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
    liveUrl: '#',
    githubUrl: '#',
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
