import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects = [
    {     
      imageUrl: 'assets/img/pollo_loco.png',
      name: 'ProjectsComponent.Pollo_Loco_Projects.title',
      language: 'JavaScript | HTML | CSS',
      description:  'ProjectsComponent.Pollo_Loco_Projects.description',
      liveTestUrl: 'https://hamidou-diallo.com/all-projects/pollo-loco/',
      githubUrl: 'https://github.com/Hamidou-ctr/pollo-loco',
    },
    {
      imageUrl: 'assets/img/join.png',
      name: 'ProjectsComponent.join_Projects.title',
      language: 'JavaScript | HTML | CSS | Firebase ',
      description:  'ProjectsComponent.join_Projects.description',
      liveTestUrl: 'https://join.hamidoudiallo.de/',
      githubUrl: 'https://github.com/Hamidou-ctr/join_frontend',
    }
  ];
}
  //  description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',