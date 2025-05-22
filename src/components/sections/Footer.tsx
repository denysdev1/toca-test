import React from 'react';
import type { FooterSection } from '@/sanity/types';
import { FooterLink } from '@/components/ui/FooterLink';
import { extractUrl } from '@/libs/functions';

export default function Footer({
  links,
  websiteInfoUrls,
  instagramUrl,
  noble33Url,
}: FooterSection) {
  return (
    <footer className='relative w-full  text-white'>
      <div className='px-5 pt-0 pb-10'>
        <LinksColumns links={links} />
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
