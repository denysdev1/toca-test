import type { HomeHeroSection } from '@/sanity/types';
import SanityImageBlock from '../utility/SanityImageBlock';

export default function HomeHeroSection({ backgroundImage, heading }: HomeHeroSection) {
  return (
    <section className='relative mx-auto max-w-[1800px]'>
      <SanityImageBlock
        priority
        image={backgroundImage}
        className={`h-[900px] w-full object-cover ${heading ? 'lg:mb-[185px]' : ''}`}
      />
      {heading && (
        <div className='absolute right-0 bottom-[180px] left-1/2 flex w-fit -translate-x-1/2 flex-col items-center justify-center lg:-bottom-[185px]'>
          {heading.split(' ').map((word, i) => (
            <div key={word} className='flex items-center font-serif text-[48.85px] leading-[100%] lg:text-[140px]'>
              {i === 1 && <div className='bg-rose-gold ml-[10px] h-[1px] w-[112px] lg:w-80'></div>}
              {word}
              {i === 0 && <div className='bg-rose-gold ml-[10px] h-[1px] w-[112px] lg:w-80'></div>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
