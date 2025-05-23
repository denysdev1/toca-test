/* eslint-disable @next/next/no-img-element */
import type { InstaPromoSection } from '@/sanity/types';
import { Button } from '../ui/button';
import SanityImageBlock from '../utility/SanityImageBlock';

export default function InstaPromoSection({ heading, subheading, instagramHandle, images }: InstaPromoSection) {
  const offsets = [
    {},
    {
      top: '50px',
    },
    {
      top: '15px',
    },
    {
      top: '45px',
    },
    {
      top: '70px',
    },
  ];

  return (
    <section className='relative mx-auto mt-[78px] max-w-[1800px] overflow-hidden pb-[125px] text-center lg:mt-[88px]'>
      <h2 className='mb-4 text-[13px] leading-[100%] font-medium text-[#C5A288] lg:mb-[33px] lg:text-[15px]'>
        {heading}
      </h2>
      <p className='mx-auto mb-[33px] max-w-[722px] text-center font-serif text-[32px] leading-[110%] text-white lg:text-[40px]'>
        {subheading}
      </p>
      <Button variant='blurred' className='mb-[130px] gap-2'>
        <img src='/instagram.svg' alt='Instagram' className='size-4' />
        {instagramHandle}
      </Button>
      <div className='flex gap-3'>
        {images.map((image, index) => (
          <SanityImageBlock
            key={image.asset._ref}
            image={image}
            className='relative size-full min-h-[176px] rounded-2xl'
            style={{
              top: '-' + offsets[index]?.top,
            }}
          />
        ))}
      </div>
    </section>
  );
}
