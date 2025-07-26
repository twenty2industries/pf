import { Component, Input, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { WhyMeData } from '../interfaces/why-me.interface';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements AfterViewInit {
  @Input() whymeData!: WhyMeData;
  
  @ViewChild('typingText') typingTextElement!: ElementRef;
  @ViewChild('currentIcon') currentIconElement!: ElementRef;
  
  public currentText:string = '';
  private currentIndex:number = 0;
  private isDeleting:boolean = false;
  private texts = [
    { key: 'LOCATION', icon: '' },
    { key: 'REMOTE_WORK', icon: '' },
    { key: 'RELOCATION', icon: '' }
  ];
  private typingSpeed = 100;

  constructor(private translate: TranslateService) {}

  ngAfterViewInit() {
    this.texts[0].icon = this.whymeData.locationIcon.path;
    this.texts[1].icon = this.whymeData.homeOffice.path;
    this.texts[2].icon = this.whymeData.reLocateIcon.path;
    
    this.updateIcon();
    this.startTyping();
  }

  private startTyping() {
    const currentPhrase = this.translate.instant(this.texts[this.currentIndex].key);
    
    if (this.isDeleting) {
      this.currentText = currentPhrase.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentPhrase.substring(0, this.currentText.length + 1);
    }

    this.typingTextElement.nativeElement.textContent = this.currentText;

    if (!this.isDeleting && this.currentText === currentPhrase) {
      setTimeout(() => {
        this.isDeleting = true;
        this.startTyping();
      }, 1500);
      return;
    }

    if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.updateIcon();
      setTimeout(() => this.startTyping(), 500);
      return;
    }

    setTimeout(() => this.startTyping(), this.typingSpeed);
  }

  private updateIcon() {
    this.currentIconElement.nativeElement.src = this.texts[this.currentIndex].icon;
  }
}