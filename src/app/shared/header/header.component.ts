import { Component, Input, AfterViewInit } from '@angular/core';
import { HeaderData } from '../../main-content/interfaces/header.interface';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @Input() headerData!: HeaderData;
  activeLanguage: string = 'en';
  activeLink: string = '#hero';
  private observer!: IntersectionObserver;

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage) {
      this.activeLanguage = savedLanguage;
      this.translate.use(savedLanguage); 
    }
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeLink = `#${entry.target.id}`;
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach(section => {
      this.observer.observe(section);
    });
  }

  changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
    localStorage.setItem('userLanguage', languageCode);
    this.activeLanguage = languageCode;
  }

  setActiveLink(url: string) {
    this.activeLink = url;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}