import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule, TranslateModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private readonly NAVBAR_OFFSET = 100; 
  currentLanguage: string = 'de';

  constructor(private translate: TranslateService , private router: Router) {
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

    if (this.router.url === '/') {
      this.smoothScroll(sectionId);
    } else {
      this.router.navigate(['/'], { queryParams: { scrollTo: sectionId } });
    }
  }
  
  private smoothScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - this.NAVBAR_OFFSET;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}