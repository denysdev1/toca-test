import type { Page } from '@/sanity/types';
import Footer from '../sections/Footer';
import HomeHeroSection from '../sections/HomeHeroSection';
import LocationsSection from '../sections/LocationsSection';
import NewsletterForm from '../sections/NewsletterForm';

const sections = {
  homeHeroSection: HomeHeroSection,
  footer: Footer,
  newsletterForm: NewsletterForm,
  locationsSection: LocationsSection,
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
