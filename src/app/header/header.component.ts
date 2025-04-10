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
  currentLanguage: string = 'fr';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}