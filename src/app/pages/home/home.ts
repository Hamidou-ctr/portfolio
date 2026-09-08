import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Portfolio } from '../../sections/portfolio/portfolio';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Hero, About, Skills, Portfolio, Testimonials, Contact],
  template: `
    <a href="#main" class="sr-only-focusable">Skip to content</a>
    <app-header />
    <main id="main" class="relative bg-[#141D2F]">
      <app-hero />
      <app-about />
      <app-skills />
      <app-portfolio />
      <app-testimonials />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class Home {}
