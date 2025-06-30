import { Component } from '@angular/core';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WhyMeData } from './interfaces/why-me.interface';
import { MySkillsData } from './interfaces/my-skills.interface';
import { ProjectData } from './interfaces/projects.interface';
import { ContactFormData } from './interfaces/contactMe.interface';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from '../shared/header/header.component';
import { HeroData } from './interfaces/hero.interface'; 
import { HeaderData } from './interfaces/header.interface';

@Component({
  selector: 'app-main-content',
  imports: [
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    FeedbackComponent,
    ContactMeComponent,
    HeroComponent,
    HeaderComponent
  ],
  templateUrl: './main-content.component.html',

  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  
  whyMeData: WhyMeData = {
    title: 'Why me',
    locationIcon: {
      path: 'images/sections/whyMe/locationDefault.png',
      alt: 'Location icon',
    },
    texts: {
      locationText: 'First text for typing effect',
      whyMeText:
        'Why are you passionate about coding?  You can include some key traits like: analytical thinking, creativity, persistence and  collaboration. A problem-solving mindset is always nice to have.',
    },
    talkButton: {
      path: 'images/sections/whyMe/buttonDefault.png',
      alt: 'Talk to me button',
    },
  };

  mySkillsData: MySkillsData = {
    title: 'My Skills',
    skillIcons: [
      {
        path: 'images/sections/mySkills/tsDefault.png',
        alt: 'TypeScript',
        skillText: 'TypeScript',
      },
      {
        path: 'images/sections/mySkills/angularDefault.png',
        alt: 'Angular',
        skillText: 'Angular',
      },
      {
        path: 'images/sections/mySkills/cssDefault.png',
        alt: 'CSS',
        skillText: 'CSS',
      },
      {
        path: 'images/sections/mySkills/htmlDefault.png',
        alt: 'HTML',
        skillText: 'HTML',
      },
      {
        path: 'images/sections/mySkills/jsDefault.png',
        alt: 'JavaScript',
        skillText: 'JavaScript',
      },
    ],
  };

  projectData: ProjectData = [
    {
      id: 1,
      title: 'El Polo Loco',
      key: 'EL_POLO_LOCO',
      duration: 'Duration: 4 weeks',
      description: 'Jump-and-run game inspired by classic platformers.',
      technologies: [
        {
          iconPath: 'images/sections/mySkills/jsDefault.png',
          altText: 'JavaScript',
        },
        {
          iconPath: 'images/sections/mySkills/htmlDefault.png',
          altText: 'HTML',
        },
        {
          iconPath: 'images/sections/mySkills/cssDefault.png',
          altText: 'CSS',
        },
      ],
      bulletPoints: [
        {
          title: 'About the project',
          content:
            'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and  bottles to fight against the Chicken.',
        },
        {
          title: 'How I have organised my work process',
          content:
            'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
        },
        {
          title: 'What I have learnt',
          content:
            'As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.',
        },
      ],
      url: 'Play Game',
      image: 'images/sections/myProjects/elpololoco.png',
    },
    {
      id: 2,
      key: 'JOIN',
      title: 'Join',
      duration: 'Duration: 5 weeks',
      description: 'Task manager inspired by the Kanban System.',
      technologies: [
        {
          iconPath: 'images/sections/mySkills/angularDefault.png',
          altText: 'Angular',
        },
        {
          iconPath: 'images/sections/mySkills/tsDefault.png',
          altText: 'TypeScript',
        },
        {
          iconPath: 'images/sections/mySkills/htmlDefault.png',
          altText: 'HTML',
        },
        {
          iconPath: 'images/sections/mySkills/cssDefault.png',
          altText: 'CSS',
        },
      ],
      bulletPoints: [
        {
          title: 'About the project',
          content:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        },
        {
          title: 'How I have organised my work process',
          content:
            'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
        },
      ],
      url: 'Try it now',
      image: 'images/sections/myProjects/join.png',
    },
    {
      id: 3,
      key: 'ONGOING_PROJECT',
      title: 'Ongoing Project',
      duration: '',
      description: 'Task manager inspired by the Kanban System.',
      technologies: [
        {
          iconPath: 'images/sections/mySkills/angularDefault.png',
          altText: 'Angular',
        },
        {
          iconPath: 'images/sections/mySkills/tsDefault.png',
          altText: 'TypeScript',
        },
        {
          iconPath: 'images/sections/mySkills/htmlDefault.png',
          altText: 'HTML',
        },
        {
          iconPath: 'images/sections/mySkills/cssDefault.png',
          altText: 'CSS',
        },
      ],
      bulletPoints: [
        {
          title: 'About the project',
          content:
            'What are you currently working on and what features are you implementing? What is the key to success in your projects?  You can mention good planning,  code quality and execution. <br><br> Show a desire to learn new technologies and continually improve your skills.',
        },
      ],
      url: 'Try it now',
      image: 'images/sections/myProjects/ongoingProject.png',
    },
  ];

  contactData: ContactFormData = {
    contactInfo: {
      emailClass: 'emailImage',
      email: 'SIUSNAROS@test.de',
      phoneClass: 'phoneImage',
      phone: '0157 123 456 68',
    },
    formFields: {
      name: {
        label: 'Your name',
        inputType: 'text',
      },
      email: {
        label: 'Your Email',
        inputType: 'text',
      },
      message: {
        label: 'Your message',
        inputType: 'text',
        privacyText:
          "I've read the privacy policy and agree to the processing of my data as outlined.",
      },
    },
    descriptionText:
      'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work. <br> Example: Feel free to get in touch with job offers or opportunities such as: ...',
  };

    heroData: HeroData = {
    images: {
      bgShape: {
        path: 'images/sections/hero/bgShapeDefault.png',
        alt: 'bg-Form',
      },
      logo: {
        path: 'images/ui/logo/logoDefault.png',
        alt: 'Portfolio-Logo',
      },
      arrowDown: {
        path: 'images/ui/arrow/arrowDownDefault.png',
        alt: 'arrow down',
      },
    },
    socials: [
      { icon: 'images/socials/mail/mailDefault.png', alt: 'mail' },
      { icon: 'images/socials/github/githubDefault.png', alt: 'gitHub' },
      { icon: 'images/socials/linkedin/linkedinDefault.png', alt: 'linkedIn' },
    ],
    text: {
      name: 'Burak Bostanli',
      title: 'FRONTEND DEVELOPER',
    },
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
