import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
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

  mailTest = true;
  //mailTest = false;   // Uncomment this line to send real emails


  onPrivacyChange(value: boolean, privacyControl: { control: { markAsTouched: () => void } }) {
    this.contactData.privacy = value;
    if (privacyControl) {
      privacyControl.control.markAsTouched();
    }
  }

  post = {
    endPoint: 'https://hamidou-diallo.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
        console: true,
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {

            ngForm.resetForm();
          },
          error: (error: any) => {
            console.error(error);
            console.log('Form submitted:', ngForm.submitted);
            console.log('Form valid:', ngForm.form.valid);
            console.log('Name valid:', ngForm.form.controls['name'].valid);
            console.log('Email valid:', ngForm.form.controls['email'].valid);
            console.log('Message valid:', ngForm.form.controls['message'].valid);
            console.log('Privacy valid:', ngForm.form.controls['privacy'].valid);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      ngForm.controls['privacy'].markAsUntouched();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // window.scrollTo({ top: 0, behavior: 'instant' })   <!-- window.scrollTo({ top: 0, behavior: 'instant' }) Empfehlung für legal notice -->
  }
}

/* 
    "success_message": "Your message has been sent successfully!",
    "error_message_send": "An error occurred while sending your message. Please try again later."
*/