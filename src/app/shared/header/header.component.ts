import { Component, Input } from '@angular/core';
import { HeaderData } from '../../main-content/interfaces/header.interface';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() headerData!: HeaderData;
  activeLanguage: string = 'en';
  activeLink: string = '#hero';

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage) {
      this.activeLanguage = savedLanguage;
      this.translate.use(savedLanguage); 
    }
  }

  changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
    localStorage.setItem('userLanguage', languageCode);
    this.activeLanguage = languageCode;
  }

  setActiveLink(url: string) {
    this.activeLink = url;
  }
}