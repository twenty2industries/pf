import { Component, Input } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
import { HeaderData } from "../../main-content/interfaces/header.interface";

@Component({
  selector: 'app-header-mobile',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  @Input() headerData!: HeaderData;
  activeLanguage: string = 'en';
  activeLink: string = '#hero';
click: any;

  constructor(private translate: TranslateService) { 
    this.changeLanguage;
        const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage) {
      this.activeLanguage = savedLanguage;
      this.translate.use(savedLanguage); 
    }
  }

  menuOpen:boolean = false;

  changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
        localStorage.setItem('userLanguage', languageCode);

    this.setActiveLanguage(languageCode);
              this.menuOpen = false;

  }

  setActiveLanguage(code: string) {
    this.activeLanguage = code;
  }

  setActiveLink(url: string) {
    this.activeLink = url;
          this.menuOpen = false;

  }

  toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
}
