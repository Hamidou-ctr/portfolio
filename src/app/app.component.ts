import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomePageComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ReferencesComponent, ContactMeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      const section = params['scrollTo'];
      if (section) {
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            const offset = el.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        }, 10);
      }
    });
  }

  isSpecialPage(): boolean {
    return this.router.url.includes('/privacy-policy') ||
      this.router.url.includes('/legal-notice');
  }


  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (!target.classList.contains('clickable')) {
      this.triggerHoverEffect();
    }
  }

  triggerHoverEffect(): void {
    const clickableElements = document.querySelectorAll('.clickable');

    clickableElements.forEach(element => {
      element.classList.add('hover-effect');
    });

    setTimeout(() => {
      clickableElements.forEach(element => {
        element.classList.remove('hover-effect');
      });
    }, 300);
  }
}