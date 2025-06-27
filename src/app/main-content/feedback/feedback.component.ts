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
}
