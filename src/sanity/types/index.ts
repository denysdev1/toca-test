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

export type HeroSection = BaseSection & {
  _type: 'heroSection';
  heading: string;
  subheading?: string;
  backgroundImage: SanityImage;
  cta?: {
    text: string;
    url: string;
  };
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

export type FeaturedContentSection = BaseSection & {
  _type: 'featuredContentSection';
  heading: string;
  items: FeaturedItem[];
};

type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection';
  backgroundImage: SanityImage;
};

export type Section = HomeHeroSection | HeroSection | FeaturedContentSection;
