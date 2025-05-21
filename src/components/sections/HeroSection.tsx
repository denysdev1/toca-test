'use client';

import Container from '@/components/layout/Container';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import { cn } from '@/libs/functions';
import type { HeroSection } from '@/sanity/types';
import Link from 'next/link';

export default function HeroSection({ data }: { data: HeroSection }) {
  const { heading, subheading, backgroundImage, cta } = data;

  return (
    <section className='relative min-h-screen flex items-center'>
      {backgroundImage && (
        <SanityImageBlock
          fill
          image={backgroundImage}
          className='object-cover z-0'
          priority
        />
      )}
      <div className='absolute inset-0 bg-black/40 z-10' />
      <Container className='relative z-20 py-24'>
        <div className='max-w-3xl mx-auto text-center text-white'>
          {heading && (
            <h1 className='font-serif text-5xl md:text-7xl uppercase tracking-widest mb-6'>
              {heading}
            </h1>
          )}
          {subheading && (
            <p className='text-xl md:text-2xl mb-8'>{subheading}</p>
          )}
          {cta && (
            <Link
              href={cta.url}
              className='inline-block px-8 py-3 border-2 border-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors'
            >
              {cta.text}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
