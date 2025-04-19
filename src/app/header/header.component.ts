import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private readonly NAVBAR_OFFSET = 100; // Konstante für den Abstand
  currentLanguage: string = 'de';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }

  ngOnInit() {
    this.currentLanguage = this.translate.getDefaultLang();
  }

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
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - this.NAVBAR_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}