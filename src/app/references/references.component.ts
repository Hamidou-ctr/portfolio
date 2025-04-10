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
  @ViewChild('refereceSection') refereceSection!: ElementRef;
  sections = [
    {
      text: 'Michael really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      title: '',
      author: 'V. Schuster - Team Partner',
      profileImage: './../../assets/img/profil.png',
      name: ''
    },
    {
      text: 'Michael really kept the team together  We wouldn\'t have got this far without his commitment.',
      title: '',
      author: 'Another Author - Team Partner 11111111',
      profileImage: './../../assets/img/profile1.png',
      name: ''
    },
    {
      text: 'Another reference text here.',
      title: '',
      author: 'Another Author - Team Partner 22222222',
      profileImage: './../../assets/img/profil2.png',
      name: ''
    },
    {
      text: 'Michael really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      title: '',
      author: 'Another Author - Team Partner 33333333',
      profileImage: './../../assets/img/profile3.png',
      name: ''
    },
  ];

  currentIndex = 0;

  constructor(private service: service) { }

  ngAfterViewInit() {
    this.service.scrollToReference$.subscribe(() => {
      if (this.refereceSection) {
        this.refereceSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

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
