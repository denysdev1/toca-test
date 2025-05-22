import { FooterLink } from '@/components/ui/FooterLink';
import { extractUrl } from '@/libs/functions';
import type { FooterSection } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer({ links, ...section }: FooterSection) {
  return (
    <footer className='relative w-full py-[50px] text-white'>
      <div className='flex flex-col gap-[50px]'>
        <LinksColumns links={links} />
        <AdditionalInfo {...section} />
      </div>
    </footer>
  );
}

const LinksColumns = ({ links }: { links: FooterSection['links'] }) => {
  return (
    <ul className='mx-auto grid max-w-5xl list-none auto-cols-fr grid-flow-col grid-rows-6 items-center gap-x-[74px] gap-y-5 px-5 text-center lg:grid-rows-4 lg:justify-between'>
      {links.map((link, index) => (
        <li key={index} className='overflow-hidden overflow-ellipsis whitespace-nowrap'>
          <FooterLink href={extractUrl(link)}>{link.title}</FooterLink>
        </li>
      ))}
    </ul>
  );
};

const AdditionalInfo = ({ websiteInfoLinks, instagramUrl, noble33Url }: Omit<FooterSection, 'links'>) => {
  const websiteLinks = (
    <ul className='mx-auto flex list-none justify-center gap-[10px] text-center font-sans text-[10px] leading-[100%] tracking-wider lg:gap-8 lg:text-[12px]'>
      {websiteInfoLinks.map((link, index) => (
        <li key={index} className='hover:opacity-50'>
          <Link href={extractUrl(link)}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className='container mx-auto flex flex-col gap-5 px-5 uppercase'>
      <div className='lg:hidden'>{websiteLinks}</div>
      {(instagramUrl || noble33Url) && (
        <div className='flex items-center justify-between'>
          {instagramUrl && (
            <Link href={instagramUrl} className='hover:opacity-50'>
              <Image src='/instagram.svg' alt='instagram logo' width={20} height={20} unoptimized />
            </Link>
          )}
          <div className='hidden lg:block'>{websiteLinks}</div>
          {noble33Url && (
            <Link href={noble33Url} className='hover:opacity-50'>
              <Image
                src='/noble33.svg'
                alt='noble33 logo'
                width={87}
                height={18}
                unoptimized
                className='lg:w-[96.6px]'
              />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
