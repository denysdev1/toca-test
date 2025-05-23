import { cn } from '@/libs/functions';

export default function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto max-w-[1800px] px-[0.62rem] md:px-6 lg:px-10', className)}>{children}</div>;
}
