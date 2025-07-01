import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderData } from '../main-content/interfaces/header.interface';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
    headerData: HeaderData = {
    logo: {
      path: 'images/sections/navBar/logoDarkDefault.png',
      alt: 'Logo',
    },
    links: [
      { text: 'Why me', url: '#why-me' },
      { text: 'Skills', url: '#skills' },
      { text: 'Projects', url: '#projects' },
      { text: 'Contact', url: '#contact' },
    ],
    languageOptions: [
      { code: 'DE', lang: 'de' },
      { code: 'EN', lang: 'en' },
    ],
  };
}