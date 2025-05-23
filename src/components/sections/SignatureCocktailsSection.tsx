import type { SignatureCocktailsSection } from '@/sanity/types';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import SanityImageBlock from '../utility/SanityImageBlock';

export default function SignatureCocktailsSection({
  heading,
  subheading,
  cocktails,
  buttonText = 'LEARN MORE',
  backgroundImage,
}: SignatureCocktailsSection) {
  return (
    <section className='relative mx-auto mt-[78px] max-w-[1800px] pb-[125px] text-center lg:mt-[88px]'>
      <h2 className='mb-4 text-[13px] leading-[100%] font-medium text-[#C5A288] lg:mb-[33px] lg:text-[15px]'>
        {heading}
      </h2>
      <p className='mx-auto mb-[27px] max-w-[722px] text-center font-serif text-[32px] leading-[110%] text-white lg:text-[40px]'>
        {subheading}
      </p>
      <Button variant='blurred' className='mb-[66px]'>
        {buttonText}
      </Button>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className='mx-auto w-full max-w-[1500px]'
      >
        <CarouselContent className='-ml-2 md:-ml-4'>
          {cocktails.map((cocktail) => (
            <CarouselItem
              key={cocktail.name}
              className='basis-[280px] pl-2 md:basis-[320px] md:pl-4 lg:basis-1/3 2xl:basis-1/4'
            >
              <div className='relative mx-auto max-w-[360px] pb-[48px]'>
                <div className='mb-4 h-[400px] lg:h-[480px]'>
                  <SanityImageBlock image={cocktail.image} className='h-full w-full rounded-2xl object-cover' />
                </div>
                <p className='font-karl text-rose-gold text-[64px] leading-[100%]'>{cocktail.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
