import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
export class AppComponent {
  title = 'Portfolio';

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