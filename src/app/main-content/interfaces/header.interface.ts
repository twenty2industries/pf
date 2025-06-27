export interface HeaderData {
  logo: {
    path: string;
    alt: string;
  };
  links: {
    text: string;
    url: string;
  }[];
  languageOptions: {
    code: string;
    lang: string;
  }[];
}
