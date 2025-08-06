import { Component, inject, Input } from '@angular/core';
import { ContactFormData } from './../interfaces/contactMe.interface';
import { FormsModule, NgForm } from '@angular/forms';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-me',
  imports: [FormsModule,TranslatePipe, RouterModule],
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  isSubmitted = false;

  http = inject(HttpClient);

  @Input() contactData!: ContactFormData;

  submitted: boolean = false;
  success: boolean = false;
  
  contactDatas = {
    name: '',
    email: '',
    message: '',
    checked: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://formspree.io/f/xpwrbkvw',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.submitted = true;

    if (ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactDatas))
        .subscribe({
          next: (response) => {
            this.success = true; 
            ngForm.resetForm();
            this.submitted = false; 
          },
          error: (error) => {
            this.success = false;
          },
        });
    } else if (ngForm.form.valid && this.mailTest) {
      this.success = true;
      ngForm.resetForm();
      this.submitted = false;
    } else {
      this.success = false;
    }
  }
}
