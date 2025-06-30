import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { HeaderData } from '../main-content/interfaces/header.interface';
import { MainContentComponent } from "../main-content/main-content.component";



@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, TranslatePipe, TranslateDirective],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

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
