import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects = [
    {
      imageUrl: './../../../assets/img/Pollo loco 1.png',
      name: 'Pollo Loco Game',
      language: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      liveTestUrl: 'https://diallo-hamidou.developerakademie.net/pollo-loco-game/#game',
      githubUrl: 'https://github.com/Hamidou-ctr/pollo-loco',
    },
    {
      imageUrl: './../../../assets/img/Pollo loco 1.png',
      name: 'Join',
      language: 'JavaScript | HTML | CSS | Firebase ',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      liveTestUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/Hamidou-ctr/project2',
    },
    {
      imageUrl: './../../../assets/img/purple_reference.png',
      name: 'Projekt 3',
      language: 'React',
      description: 'Ein Projekt mit React erstellt.',
      liveTestUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/Hamidou-ctr/project3',
    },
    {
      imageUrl: './../../../assets/img/profil.png',
      name: 'Projekt 4',
      language: 'Vue.js',
      description: 'Ein Projekt mit Vue.js erstellt.',
      liveTestUrl: 'https://example.com/project4',
      githubUrl: 'https://github.com/Hamidou-ctr/project4',
    },
  ];
}
