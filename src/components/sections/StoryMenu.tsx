import type { StoryMenuSection } from '@/sanity/types';
import { Button } from '../ui/button';
import SanityImageBlock from '../utility/SanityImageBlock';

export default function StoryMenu({ story, menu }: StoryMenuSection) {
  return (
    <section className='mx-auto mb-[10px] flex max-w-[1800px] flex-col items-center gap-[10px] px-[10px] lg:mb-4 lg:flex-row lg:gap-4'>
      {[story, menu].map((section) => (
        <div key={section.heading} className='relative w-full'>
          <div className='relative w-full rounded-2xl'>
            <h2 className='absolute top-[50px] left-1/2 z-[1] -translate-x-1/2 text-[13px] leading-[100%] font-medium text-[#C5A288] lg:top-20 lg:text-[15px]'>
              {section.heading}
            </h2>
            <p className='absolute top-20 left-1/2 z-[1] -translate-x-1/2 text-center font-serif text-[32px] leading-[110%] text-white lg:top-[124px] lg:text-[40px]'>
              {section.subheading}
            </p>
            <div className='relative h-[640px] w-full'>
              <SanityImageBlock image={section.image} className='h-full w-full rounded-2xl object-cover' />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/gradient.png' alt='' className='absolute inset-0 h-full w-full rounded-2xl' />
              <Button variant='blurred' className='absolute bottom-[50px] left-1/2 -translate-x-1/2 lg:bottom-20'>
                {section.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
