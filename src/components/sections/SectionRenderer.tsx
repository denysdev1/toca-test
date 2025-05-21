import dynamic from 'next/dynamic';
import { Section } from '@/sanity/types';

// Dynamically import all section components
const HeroSection = dynamic(() => import('./HeroSection'));
const FeaturedContentSection = dynamic(
  () => import('./FeaturedContentSection')
);
// Add more section components as needed

const sectionComponents: Record<string, React.ComponentType<any>> = {
  heroSection: HeroSection,
  featuredContentSection: FeaturedContentSection,
  // Add more mappings as needed
};

export default function SectionRenderer({
  sections = [],
}: {
  sections: Section[];
}) {
  return (
    <>
      {sections.map((section, index) => {
        const SectionComponent = sectionComponents[section._type];

        if (!SectionComponent) {
          console.warn(`Section component not found: ${section._type}`);
          return null;
        }

        return <SectionComponent key={section._key || index} data={section} />;
      })}
    </>
  );
}
