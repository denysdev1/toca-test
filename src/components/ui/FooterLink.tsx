import Link from 'next/link';
import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof Link>;

export const FooterLink = ({ children, ...props }: Props) => {
  return (
    <Link
      className='italic font-serif text-[22px] md:text-2xl hover:opacity-50 leading-[100%'
      {...props}
    >
      {children}
    </Link>
  );
};
