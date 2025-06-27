export interface InputBoxData {
  subject?: string;
  userNames?: {
    name: string;
  }[];

  backgroundImage: {
    path: string;
    alt: string;
  };

  learning?: {
    iconPath: string;
    language: string;
  }[];

    feedBackText?: {
    text: string;
  }[];

  projects?: {
    // Optionales Array von User-Objekten
    name: string;
  }[];

  inputText?: string[];

  link?: string;
}
