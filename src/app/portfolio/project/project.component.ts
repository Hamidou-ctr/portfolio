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
      imageUrl: './../../../assets/img/pollo_loco.png',
      name: 'Pollo Loco Game',
      language: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      liveTestUrl: 'https://hamidou-diallo.com/all-projects/pollo-loco/',
      githubUrl: 'https://github.com/Hamidou-ctr/pollo-loco',
    },
    {
      imageUrl: './../../../assets/img/join.png',
      name: 'Join',
      language: 'JavaScript | HTML | CSS | Firebase ',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      liveTestUrl: 'https://join.hamidoudiallo.de/',
      githubUrl: 'https://github.com/Hamidou-ctr',
    }
  ];
}