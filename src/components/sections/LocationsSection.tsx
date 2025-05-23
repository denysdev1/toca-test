import type { LocationsSection } from '@/sanity/types';
import { Button } from '../ui/button';
import SanityImageBlock from '../utility/SanityImageBlock';

export default function LocationsSection({ locations = [] }: LocationsSection) {
  return (
    <section className='flex flex-col items-center gap-[10px] lg:flex-row lg:justify-center lg:gap-4'>
      {locations.map(({ name, heading = 'EXPERIENCE', buttonText = 'LEARN MORE', image }) => (
        <div key={name} className='relative w-fit rounded-2xl'>
          <h2 className='absolute top-[50px] left-1/2 z-[1] -translate-x-1/2 text-[13px] leading-[100%] font-medium text-[#C5A288] lg:top-20 lg:text-[15px]'>
            {heading}
          </h2>
          <p className='absolute top-20 left-1/2 z-[1] -translate-x-1/2 font-serif text-[32px] leading-[110%] text-white lg:top-[124px] lg:text-[40px]'>
            {name}
          </p>
          <div className='relative w-fit lg:h-[672px] lg:w-[443px]'>
            <SanityImageBlock image={image} className='rounded-2xl lg:h-full lg:w-full lg:object-cover' />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/gradient.png' alt='' className='absolute inset-0 rounded-2xl lg:h-full lg:w-full' />
            <Button variant='blurred' className='absolute bottom-[50px] left-1/2 -translate-x-1/2 lg:bottom-20'>
              {buttonText}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
