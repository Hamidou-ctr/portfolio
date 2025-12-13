import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-privacy-policy',
    imports: [CommonModule, TranslateModule],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);  // Scrollt zum Seitenanfang
  }
}
