import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMenu = false;
  isHidden = false;
  selectedSection: string | null = null;

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.isHidden = !this.isHidden;
    //document.body.style.overflow = this.showMenu ? 'hidden' : '';
  }

  closeMenu() {
    this.showMenu = false;
  }

  scrollToSection(sectionId: string) {
    this.selectedSection = sectionId;
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}