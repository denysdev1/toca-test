import React from 'react';
import type { FooterSection } from '@/sanity/types';
import { FooterLink } from '@/components/ui/FooterLink';
import { extractUrl } from '@/libs/functions';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ links, ...section }: FooterSection) {
  return (
    <footer className='relative w-full text-white'>
      <div className='px-5 pt-0 pb-10 flex flex-col gap-[50px]'>
        <LinksColumns links={links} />
        <AdditionalInfo {...section} />
      </div>
    </footer>
  );
}

const LinksColumns = ({ links }: { links: FooterSection['links'] }) => {
  return (
    <ul className='list-none grid grid-flow-col auto-cols-fr grid-rows-6 lg:grid-rows-4 gap-y-5 gap-x-[74px] lg:justify-between items-center text-center max-w-5xl mx-auto'>
      {links.map((link, index) => (
        <li
          key={index}
          className='overflow-ellipsis overflow-hidden whitespace-nowrap'
        >
          <FooterLink href={extractUrl(link)}>{link.title}</FooterLink>
        </li>
      ))}
    </ul>
  );
};

const AdditionalInfo = ({
  websiteInfoLinks,
  instagramUrl,
  noble33Url,
}: Omit<FooterSection, 'links'>) => {
  const websiteLinks = (
    <ul className='list-none flex gap-[10px] lg:gap-8 leading-[100%] tracking-wider text-[10px] lg:text-[12px] font-sans mx-auto'>
      {websiteInfoLinks.map((link, index) => (
        <li key={index} className='hover:opacity-50'>
          <Link href={extractUrl(link)}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className='flex flex-col gap-5 uppercase'>
      <div className='lg:hidden'>{websiteLinks}</div>
      {(instagramUrl || noble33Url) && (
        <div className='flex justify-between items-center'>
          {instagramUrl && (
            <Link href={instagramUrl} className='hover:opacity-50'>
              <Image
                src='/instagram.svg'
                alt='instagram logo'
                width={20}
                height={20}
                unoptimized
              />
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
