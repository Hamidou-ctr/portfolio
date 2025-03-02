import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';
import { service } from '../service/service.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  @ViewChild('refereceSection') refereceSection!: ElementRef; // Template-Referenz
  sections = [
    {
      text: 'Michael really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      title: '',
      author: 'V. Schuster - Team Partner',
      profileImage: './../../assets/img/profil.png',
      name: ''
    },
     /* {
      text: 'Another reference text here.',
      title: '',
      author: 'Another Author - Team Partner 11111111',
      profileImage: './../../assets/img/another_profile.png',
      name: ''
    },
    {
      text: 'Another reference text here.',
      title: '',
      author: 'Another Author - Team Partner 22222222',
      profileImage: './../../assets/img/another_profile.png',
      name: ''
    },
    {
      text: 'Another reference text here.',
      title: '',
      author: 'Another Author - Team Partner 33333333',
      profileImage: './../../assets/img/another_profile.png',
      name: ''
    },  */
    // Weitere Sections hier hinzufügen
  ];

  currentIndex = 0;

  nextSection() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    }
  }

  previousSection() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
