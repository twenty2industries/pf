import { Component } from '@angular/core';
import { InputBoxComponent } from '../input-box/input-box.component';
import { InputBoxData } from '../interfaces/input-box.interface';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";


@Component({
  selector: 'app-feedback',
  imports: [InputBoxComponent, TranslatePipe, TranslateDirective],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {

  feedbackItems: InputBoxData[] = [
    {
      userNames: [{ name: 'Sahra Mueller' }],
      projects: [{ name: 'DA Bubble' }],
      backgroundImage: {
        path: '/images/sections/mySkills/bgFeedbackDefault.png',
        alt: 'Feedback background',
      },
      feedBackText: [
        {
          text: `‘’Claudia had to develop, format and deliver content in 
          collaboration with the team members. She is a reliable and friendly person.‘’`,
        },
      ],
      link: 'sius naros',
    },

    {
      userNames: [{ name: 'James Rugman' }],
      projects: [{ name: 'Join' }],
      backgroundImage: {
        path: '/images/sections/mySkills/bgFeedbackDefault.png',
        alt: 'Feedback background',
      },
      feedBackText: [
        {
          text: `‘’Claudia is a reliable and friendly person. Works in a structured way 
          and write a clear code. I recommend her as a colleague.‘’`,
        },
      ],
      link: 'sius naros',
    },

    {
      userNames: [{ name: 'Evelyn Marx' }],
      projects: [{ name: 'El Polo Loco' }],
      backgroundImage: {
        path: '/images/sections/mySkills/bgFeedbackDefault.png',
        alt: 'Feedback background',
      },
      feedBackText: [
        {
          text: `‘’She is a trustworthy teamplayer and can cope with the stress of 
          deadlines. Structured work and clear code.‘’`,
        },
      ],
      link: 'sius naros',
    },
  ];
  feedbacks = [
    { id: 1, userName: 'feedback.feedback1.userName', projectName: 'feedback.feedback1.projectName' },
    { id: 2, userName: 'feedback.feedback2.userName', projectName: 'feedback.feedback2.projectName' },
    { id: 3, userName: 'feedback.feedback3.userName', projectName: 'feedback.feedback3.projectName' }
  ];

  isDragging:boolean = false;
  startX:number = 0;
  scrollLeft:number = 0;
  container?: HTMLElement;

  startDrag(e: MouseEvent | TouchEvent) { // (e - value) || start the dragging 
    this.container = (e.currentTarget as HTMLElement);// saves the first drag point
    this.isDragging = true;// flag acrtivated as soon as mouseevent is happening 
    this.startX = ('pageX' in e ? e.pageX : e.touches[0].pageX) - this.container.offsetLeft; //calculates the first drag point e.page for desktop e.touches for phones
    this.scrollLeft = this.container.scrollLeft; // saves the current.container scrolling point
  }

  onDrag(e: MouseEvent | TouchEvent) {
    if (!this.isDragging || !this.container) return; //if the flag is false or the unexpected 
    e.preventDefault(); // prevents grabbing text, there is also a scss way of doing this 
    const x = ('pageX' in e ? e.pageX : e.touches[0].pageX) - this.container.offsetLeft; // x is the current position 
    const walk = (x - this.startX) * 2; //walk is the dragging distance (*2 for speed)
    this.container.scrollLeft = this.scrollLeft - walk; //saves the current scrolling point  
  }

  endDrag() {
    this.isDragging = false;
  }
}

