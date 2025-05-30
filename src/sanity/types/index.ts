import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityImage = SanityImageObject & {
  alt?: string;
};

export type Navigation = {
  mainNav: SanityLink[];
  secondaryNav: SanityLink[];
};

export type HeaderNav = Navigation & {
  backgroundImage: SanityImage;
};

export type SanityLink = {
  title: string;
  isExternal: boolean;
  isNewWindow: boolean;
  external?: string;
  internal?: Route;
};

export type Route = {
  slug: {
    current: string;
  };
} & (
  | {
      isRedirect: true;
      redirectRoute: Route;
      page?: never;
    }
  | {
      isRedirect: false;
      page: Page;
      redirectRoute?: never;
    }
);

export type Page = {
  title: string;
  sections: Section[];
};

type BaseSection = {
  _type: string;
  _key: string;
};

export type FeaturedItem = {
  title: string;
  description?: string;
  image: SanityImage;
  cta?: {
    text: string;
    url: string;
  };
};

export type FooterSection = BaseSection & {
  _type: 'footer';
  links: SanityLink[];
  websiteInfoLinks: SanityLink[];
  instagramUrl: string;
  noble33Url: string;
};

export type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection';
  backgroundImage: SanityImage;
  heading: string;
};

export type NewsletterFormSection = BaseSection & {
  _type: 'newsletterForm';
  heading: string;
  subheading: string;
  emailPlaceholder: string;
  selectPlaceholder: string;
  locations: string[];
  submitButtonText: string;
};

export type LocationsSection = BaseSection & {
  _type: 'locations';
  heading: string;
  locations: {
    heading: string;
    name: string;
    buttonText: string;
    image: SanityImage;
  }[];
};

export type TuesdayPromoSection = BaseSection & {
  _type: 'tuesdayPromo';
  heading: string;
  subheading: string;
  image: SanityImage;
  buttonText: string;
};

export type StoryMenuSection = BaseSection & {
  _type: 'storyMenu';
  story: {
    heading: string;
    subheading: string;
    image: SanityImage;
    buttonText: string;
  };
  menu: {
    heading: string;
    subheading: string;
    image: SanityImage;
    buttonText: string;
  };
};

export type SignatureCocktailsSection = BaseSection & {
  _type: 'signatureCocktails';
  heading: string;
  subheading: string;
  cocktails: {
    name: string;
    image: SanityImage;
  }[];
  buttonText: string;
  backgroundImage: SanityImage;
};

export type InstaPromoSection = BaseSection & {
  _type: 'instaPromo';
  heading: string;
  subheading: string;
  images: SanityImage[];
  instagramHandle: string;
};

export type Section =
  | HomeHeroSection
  | FooterSection
  | NewsletterFormSection
  | TuesdayPromoSection
  | StoryMenuSection
  | SignatureCocktailsSection
  | InstaPromoSection
  | LocationsSection;
