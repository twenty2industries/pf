import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './main-content/hero/hero.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroData } from './main-content/interfaces/hero.interface';
import { HeaderData } from './main-content/interfaces/header.interface';
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

  title = 'portfolio';

}
