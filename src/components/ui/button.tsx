import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  "inline-flex items-center max-w-full justify-center gap-2 whitespace-nowrap rounded-2xl ring-offset-[3px] ring-offset-accent-foreground text-[13px] leading-[100%] font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:ring-[0.5px] ring-white/50",
  {
    variants: {
      variant: {
        default: 'border hover:bg-[#444] hover:text-white border-white/50',
        submit: 'rounded-none border-white border font-medium hover:bg-[#444] hover:text-white',
      },
      size: {
        default: 'h-10 px-[22px] py-[14px] has-[>svg]:px-3',
        submit: 'h-[32px] px-[22px] py-[14px] has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
