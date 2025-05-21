import Container from '@/components/layout/Container';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import { cn } from '@/libs/functions';
import type { FeaturedContentSection } from '@/sanity/types';
import Link from 'next/link';

export default function FeaturedContentSection({
  data,
}: {
  data: FeaturedContentSection;
}) {
  const { heading, items } = data;

  return (
    <section className='py-24 bg-black text-white'>
      <Container>
        {heading && (
          <h2 className='font-serif text-4xl uppercase tracking-widest text-center mb-16'>
            {heading}
          </h2>
        )}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {items?.map((item, index) => (
            <div key={index} className='group'>
              <div className='relative aspect-square mb-6 overflow-hidden'>
                {item.image && (
                  <SanityImageBlock
                    fill
                    image={item.image}
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                )}
              </div>
              <h3 className='font-serif text-2xl uppercase tracking-wider mb-4'>
                {item.title}
              </h3>
              {item.description && (
                <p className='mb-4 text-gray-300'>{item.description}</p>
              )}
              {item.cta && (
                <Link
                  href={item.cta.url}
                  className='inline-block text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-gold transition-colors'
                >
                  {item.cta.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
