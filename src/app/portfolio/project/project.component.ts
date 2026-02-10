import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projects = [
    {
      imageUrl: 'assets/img/join.svg',
      name: 'ProjectsComponent.join_Projects.title',
      language: 'JavaScript | HTML | CSS | Firebase ',
      description: 'ProjectsComponent.join_Projects.description',
      liveTestUrl: 'https://join.hamidoudiallo.de/',
      githubUrl: 'https://github.com/Hamidou-ctr/join_frontend',
    },

    {
      imageUrl: 'assets/img/Pollo_loco.svg',
      name: 'ProjectsComponent.Pollo_Loco_Projects.title',
      language: 'JavaScript | HTML | CSS',
      description: 'ProjectsComponent.Pollo_Loco_Projects.description',
      liveTestUrl: 'https://pollo-loco.hamidoudiallo.de/',
      githubUrl: 'https://github.com/Hamidou-ctr/pollo-loco',
    },

    {
      imageUrl: 'assets/img/da-babble.svg',
      name: 'ProjectsComponent.da_bubble_Projects.title',
      language: 'Angular | TypeScript | Firebase',
      description: 'ProjectsComponent.da_bubble_Projects.description',
      liveTestUrl: 'https://da-babble.hamidoudiallo.de/intro',
      githubUrl: 'https://github.com/alessandro-arg/da-bubble',
    },
  ];
}