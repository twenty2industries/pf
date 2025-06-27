export interface HeroData {
  images: {
    bgShape: {
      path: string;
      alt: string;
    };
    logo: {
      path: string;
      alt: string;
    };
    arrowDown: {
      path: string;
      alt: string;
    };
  };
  socials: {
    icon: string;
    alt: string;
  }[];
  text: {
    name: string;
    title: string;
  };
}