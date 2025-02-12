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

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.isHidden = !this.isHidden;

/*     if (this.showMenu) {
      document.body.style.overflow = 'hidden'; // Scrollen verhindern
    } else {
      document.body.style.overflow = ''; // Scrollen wieder aktivieren
    } */
  }
}
