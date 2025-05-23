import type { Page } from '@/sanity/types';
import Footer from '../sections/Footer';
import HomeHeroSection from '../sections/HomeHeroSection';
import LocationsSection from '../sections/LocationsSection';
import MainPromo from '../sections/MainPromo';
import NewsletterForm from '../sections/NewsletterForm';
import SignatureCocktailsSection from '../sections/SignatureCocktailsSection';
import StoryMenu from '../sections/StoryMenu';

const sections = {
  homeHeroSection: HomeHeroSection,
  footer: Footer,
  newsletterForm: NewsletterForm,
  locationsSection: LocationsSection,
  mainPromo: MainPromo,
  storyMenu: StoryMenu,
  signatureCocktailsSection: SignatureCocktailsSection,
};

export function SectionRenderer({ section }: { section: Page['sections'][number] }) {
  const { _type } = section;

  const SectionComponent = sections[_type];

  if (!SectionComponent) {
    console.warn(`No component found for section type: ${_type}`);
    return null;
  }

  return <SectionComponent {...section} />;
}
