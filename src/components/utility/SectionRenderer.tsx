import type { Page } from '@/sanity/types';
import HomeHeroSection from '../sections/HomeHeroSection';
import Footer from '../sections/Footer';

const sections = {
  homeHeroSection: HomeHeroSection,
  footer: Footer,
};

export function SectionRenderer({
  section,
}: {
  section: Page['sections'][number];
}) {
  const { _type } = section;

  const SectionComponent = sections[_type];

  if (!SectionComponent) {
    console.warn(`No component found for section type: ${_type}`);
    return null;
  }

  return <SectionComponent {...section} />;
}
