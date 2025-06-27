import { Component, Input } from '@angular/core';
import { ContactFormData } from './../interfaces/contactMe.interface';
import { FormsModule, NgForm } from '@angular/forms';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule,TranslatePipe, TranslateDirective],
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  @Input() contactData!: ContactFormData;

  submitted: boolean = false;

  contactDatas = {
    name: '',
    email: '',
    message: '',
    checked: false,
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted) {
      this.submitted = true;
      console.log(this.submitted);
    }
  }
}
