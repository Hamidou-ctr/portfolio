import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, TranslateModule, FormsModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  showPopup = false;
  isErrorPopup = false;

  //mailTest = true;
  mailTest = false;   // Uncomment this line to send real emails


  onPrivacyChange(value: boolean, privacyControl: { control: { markAsTouched: () => void } }) {
    this.contactData.privacy = value;
    if (privacyControl) {
      privacyControl.control.markAsTouched();
    }
  }

  post = {
    endPoint: 'https://www.hamidoudiallo.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      responseType: 'json' as const
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response: any) => {
            if (response.success) {
              this.showSuccessPopup();
              ngForm.resetForm();
              if (ngForm.controls['privacy']) {
                ngForm.controls['privacy'].markAsUntouched();
              }
            } else {
              this.showErrorPopup();
            }
          },
          error: (error: any) => {
            this.showErrorPopup();
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // Testmodus
      console.log('Test mode - form would be submitted');
      this.showSuccessPopup();
      ngForm.resetForm();
      if (ngForm.controls['privacy']) {
        ngForm.controls['privacy'].markAsUntouched();
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  private showSuccessPopup(duration: number = 4000) {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, duration);
  }

  private showErrorPopup(duration: number = 5000) {
    this.isErrorPopup = true;
    this.showPopup = true;
    setTimeout(() => this.showPopup = false, duration);
  }
}