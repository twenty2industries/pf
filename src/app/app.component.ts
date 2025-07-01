import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './main-content/hero/hero.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroData } from './main-content/interfaces/hero.interface';
import { HeaderData } from './main-content/interfaces/header.interface';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainContentComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    TranslatePipe,
    TranslateDirective,
    HeaderMobileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  };

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
